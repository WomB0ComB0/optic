import { Command } from 'commander';
import brotli from 'brotli';
import open from 'open';

import { generateSpecResults } from '@useoptic/openapi-utilities';
import { wrapActionHandlerWithSentry } from '@useoptic/openapi-utilities/build/utilities/sentry';
import { BreakingChangesRuleset } from '@useoptic/standard-rulesets';
import { RuleRunner } from '@useoptic/rulesets-base';

import {
  parseFilesFromRef,
  ParseResult,
  getFileFromFsOrGit,
} from '../../utils/spec-loaders';
import { OpticCliConfig, VCS } from '../../config';

const description = `run a diff between two API specs`;

const usage = () => `
  optic diff --id user-api --base <base>
  optic diff <file_path> --base <base>
  optic diff <file_path> <file_to_compare_against>`;

const helpText = `
Example usage:
  Run a diff against the api spec \`user-api\` using the config from your \`optic.yml\` file against master
  $ optic diff --id user-api --base master

  Run a diff between \`master:specs/openapi-spec.yml\` and \`specs/openapi-spec.yml\`
  $ optic diff openapi-spec.yml --base master

  Run a diff between \`openapi-spec-v0.yml\` and \`openapi-spec-v1.yml\`
  $ optic diff openapi-spec-v0.yml openapi-spec-v1.yml
  
  Run a diff and view changes in the Optic web view
  $ optic diff --id user-api --base master --web`;

type SpecResults = Awaited<ReturnType<typeof generateSpecResults>>;
const webBase =
  process.env.OPTIC_ENV === 'staging'
    ? 'https://app.o3c.info'
    : 'https://app.useoptic.com';

export const registerDiff = (cli: Command, config: OpticCliConfig) => {
  cli
    .command('diff')
    .configureHelp({
      commandUsage: usage,
    })
    .addHelpText('after', helpText)
    .description(description)
    .argument('[file_path]', 'path to file to compare')
    .argument('[file_to_compare_against]', 'path to file to compare with')
    .option(
      '--base <base>',
      'the base ref to compare against. Defaults to master',
      'master'
    )
    .option(
      '--id <id>',
      'the id of the spec to run against in defined in the `optic.yml` file'
    )
    .option('--web', 'view the diff in the optic changelog web view', false)
    .action(
      wrapActionHandlerWithSentry(
        async (
          file1: string | undefined,
          file2: string | undefined,
          options: {
            base: string;
            id?: string;
            web: boolean;
          }
        ) => {
          const webBase =
            process.env.OPTIC_ENV === 'staging'
              ? 'https://app.o3c.info'
              : 'https://app.useoptic.com';

          let baseFile: ParseResult;
          let headFile: ParseResult;

          if (file1 && file2) {
            const baseFilePath = file1;
            const headFilePath = file2;
            [baseFile, headFile] = await Promise.all([
              getFileFromFsOrGit(baseFilePath),
              getFileFromFsOrGit(headFilePath),
            ]);
          } else if (file1) {
            const commandVariant = `optic diff <file> --base <ref>`;
            if (config.vcs !== VCS.Git) {
              console.error(
                `Error: ${commandVariant} must be called from a git repository.`
              );
              return;
            }

            ({ baseFile, headFile } = await parseFilesFromRef(
              file1,
              options.base,
              config.root
            ));
          } else if (options.id) {
            const commandVariant = `optic diff --id <id> --base <ref>`;
            if (config.vcs !== VCS.Git) {
              console.error(
                `Error: ${commandVariant} must be called from a git repository.`
              );
              return;
            }
            if (!config.configPath) {
              console.error(
                `Error: no optic.yml config file was found. optic.yml must be included for ${commandVariant}`
              );
              return;
            }

            console.log('Running diff against files from optic.yml file');
            const files = config.files;
            const maybeMatchingFile = files.find(
              (file) => file.id === options.id
            );

            if (maybeMatchingFile) {
              ({ baseFile, headFile } = await parseFilesFromRef(
                maybeMatchingFile.path,
                options.base,
                config.root
              ));
            } else {
              console.error(
                `id: ${options.id} was not found in the optic.yml file`
              );
              console.log(
                `valid list of file names: ${files
                  .map((file) => file.id)
                  .join(', ')}`
              );
              return;
            }
          } else {
            console.error('Invalid combination of arguments');
            console.log(helpText);
            return;
          }

          const lintResult = await lint(baseFile, headFile);
          console.log(lintResult);

          // TODO render here
          if (options.web) {
            const compressedData = compressData(baseFile, headFile);
            console.log('Opening up diff in web view');
            openBrowserToPage(`${webBase}/cli/diff#${compressedData}`);
          }
        }
      )
    );
};

const compressData = (baseFile: ParseResult, headFile: ParseResult): string => {
  const dataToCompress = {
    base: baseFile.jsonLike,
    head: headFile.jsonLike,
  };
  // TODO maybe strip out unnecessary things here?
  // We could strip out:
  // - components that do not have a `$ref` key - they should be flattened, except for any circular refs
  const compressed = brotli.compress(
    Buffer.from(JSON.stringify(dataToCompress))
  );
  const urlSafeString = Buffer.from(compressed).toString('base64');
  return urlSafeString;
};

const openBrowserToPage = async (url: string) => {
  await open(url, { wait: false });
};

const lint = async (
  fromSpec: ParseResult,
  toSpec: ParseResult
): Promise<SpecResults> => {
  const rules = [new BreakingChangesRuleset()];
  const ruleRunner = new RuleRunner(rules);

  return generateSpecResults(ruleRunner, fromSpec, toSpec, null);
};