/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/openapi3/implementations/openapi3/openapi-traverser.test.ts TAP > must match snapshot 1`] = `
Object {
  "components": Object {
    "schemas": Object {
      "ApiResponse": Object {
        "properties": Object {
          "code": Object {
            "format": "int32",
            "type": "integer",
          },
          "message": Object {
            "type": "string",
          },
          "type": Object {
            "type": "string",
          },
        },
        "type": "object",
      },
      "Category": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "Category",
        },
      },
      "Order": Object {
        "properties": Object {
          "complete": Object {
            "default": false,
            "type": "boolean",
          },
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "petId": Object {
            "format": "int64",
            "type": "integer",
          },
          "quantity": Object {
            "format": "int32",
            "type": "integer",
          },
          "shipDate": Object {
            "format": "date-time",
            "type": "string",
          },
          "status": Object {
            "description": "Order Status",
            "enum": Array [
              "placed",
              "approved",
              "delivered",
            ],
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "Order",
        },
      },
      "Pet": Object {
        "properties": Object {
          "category": Object {
            "$ref": "#/components/schemas/Category",
          },
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "example": "doggie",
            "type": "string",
          },
          "photoUrls": Object {
            "items": Object {
              "type": "string",
            },
            "type": "array",
            "xml": Object {
              "name": "photoUrl",
              "wrapped": true,
            },
          },
          "status": Object {
            "description": "pet status in the store",
            "enum": Array [
              "available",
              "pending",
              "sold",
            ],
            "type": "string",
          },
          "tags": Object {
            "items": Object {
              "$ref": "#/components/schemas/Tag",
            },
            "type": "array",
            "xml": Object {
              "name": "tag",
              "wrapped": true,
            },
          },
        },
        "required": Array [
          "name",
          "photoUrls",
        ],
        "type": "object",
        "xml": Object {
          "name": "Pet",
        },
      },
      "Tag": Object {
        "properties": Object {
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "name": Object {
            "type": "string",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "Tag",
        },
      },
      "User": Object {
        "properties": Object {
          "email": Object {
            "type": "string",
          },
          "firstName": Object {
            "type": "string",
          },
          "id": Object {
            "format": "int64",
            "type": "integer",
          },
          "lastName": Object {
            "type": "string",
          },
          "password": Object {
            "type": "string",
          },
          "phone": Object {
            "type": "string",
          },
          "username": Object {
            "type": "string",
          },
          "userStatus": Object {
            "description": "User Status",
            "format": "int32",
            "type": "integer",
          },
        },
        "type": "object",
        "xml": Object {
          "name": "User",
        },
      },
    },
    "securitySchemes": Object {
      "api_key": Object {
        "in": "header",
        "name": "api_key",
        "type": "apiKey",
      },
      "petstore_auth": Object {
        "flows": Object {
          "implicit": Object {
            "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
            "scopes": Object {
              "read:pets": "read your pets",
              "write:pets": "modify pets in your account",
            },
          },
        },
        "type": "oauth2",
      },
    },
  },
  "externalDocs": Object {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io",
  },
  "info": Object {
    "contact": Object {
      "email": "apiteam@swagger.io",
    },
    "description": "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key \`special-key\` to test the authorization     filters.",
    "license": Object {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    "termsOfService": "http://swagger.io/terms/",
    "title": "Swagger Petstore",
    "version": "1.0.0",
  },
  "openapi": "3.0.1",
  "paths": Object {
    "/pet/{petId}/uploadImage": Object {
      "post": Object {
        "operationId": "uploadFile",
        "parameters": Array [
          Object {
            "description": "ID of pet to update",
            "in": "path",
            "name": "petId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "type": "integer",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "multipart/form-data": Object {
              "schema": Object {
                "properties": Object {
                  "additionalMetadata": Object {
                    "description": "Additional data to pass to server",
                    "type": "string",
                  },
                  "file": Object {
                    "description": "file to upload",
                    "format": "binary",
                    "type": "string",
                  },
                },
              },
            },
          },
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/ApiResponse",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "petstore_auth": Array [
              "write:pets",
              "read:pets",
            ],
          },
        ],
        "summary": "uploads an image",
        "tags": Array [
          "pet",
        ],
      },
    },
    "/store/inventory": Object {
      "get": Object {
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "additionalProperties": Object {
                    "format": "int32",
                    "type": "integer",
                  },
                  "type": "object",
                },
              },
            },
            "description": "successful operation",
          },
        },
        "security": Array [
          Object {
            "api_key": Array [],
          },
        ],
        "summary": "Returns pet inventories by status",
        "tags": Array [
          "store",
        ],
      },
    },
    "/store/order": Object {
      "post": Object {
        "operationId": "placeOrder",
        "requestBody": Object {
          "content": Object {
            "*/*": Object {
              "schema": Object {
                "$ref": "#/components/schemas/Order",
              },
            },
          },
          "description": "order placed for purchasing the pet",
          "required": true,
        },
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "content": Object {},
            "description": "Invalid Order",
          },
        },
        "summary": "Place an order for a pet",
        "tags": Array [
          "store",
        ],
        "x-codegen-request-body-name": "body",
      },
    },
    "/store/order/{orderId}": Object {
      "delete": Object {
        "description": "For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors",
        "operationId": "deleteOrder",
        "parameters": Array [
          Object {
            "description": "ID of the order that needs to be deleted",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "minimum": 1,
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "content": Object {},
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "content": Object {},
            "description": "Order not found",
          },
        },
        "summary": "Delete purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
      "get": Object {
        "description": "For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions",
        "operationId": "getOrderById",
        "parameters": Array [
          Object {
            "description": "ID of pet that needs to be fetched",
            "in": "path",
            "name": "orderId",
            "required": true,
            "schema": Object {
              "format": "int64",
              "maximum": 10,
              "minimum": 1,
              "type": "integer",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/Order",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "content": Object {},
            "description": "Invalid ID supplied",
          },
          "404": Object {
            "content": Object {},
            "description": "Order not found",
          },
        },
        "summary": "Find purchase order by ID",
        "tags": Array [
          "store",
        ],
      },
    },
    "/user": Object {
      "post": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": Object {
          "content": Object {
            "*/*": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Created user object",
          "required": true,
        },
        "responses": Object {
          "default": Object {
            "content": Object {},
            "description": "successful operation",
          },
        },
        "summary": "Create user",
        "tags": Array [
          "user",
        ],
        "x-codegen-request-body-name": "body",
      },
    },
    "/user/{username}": Object {
      "delete": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": Array [
          Object {
            "description": "The name that needs to be deleted",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "400": Object {
            "content": Object {},
            "description": "Invalid username supplied",
          },
          "404": Object {
            "content": Object {},
            "description": "User not found",
          },
        },
        "summary": "Delete user",
        "tags": Array [
          "user",
        ],
      },
      "get": Object {
        "operationId": "getUserByName",
        "parameters": Array [
          Object {
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "$ref": "#/components/schemas/User",
                },
              },
            },
            "description": "successful operation",
          },
          "400": Object {
            "content": Object {},
            "description": "Invalid username supplied",
          },
          "404": Object {
            "content": Object {},
            "description": "User not found",
          },
        },
        "summary": "Get user by user name",
        "tags": Array [
          "user",
        ],
      },
      "put": Object {
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": Array [
          Object {
            "description": "name that need to be updated",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "requestBody": Object {
          "content": Object {
            "*/*": Object {
              "schema": Object {
                "$ref": "#/components/schemas/User",
              },
            },
          },
          "description": "Updated user object",
          "required": true,
        },
        "responses": Object {
          "400": Object {
            "content": Object {},
            "description": "Invalid user supplied",
          },
          "404": Object {
            "content": Object {},
            "description": "User not found",
          },
        },
        "summary": "Updated user",
        "tags": Array [
          "user",
        ],
        "x-codegen-request-body-name": "body",
      },
    },
    "/user/createWithArray": Object {
      "post": Object {
        "operationId": "createUsersWithArrayInput",
        "requestBody": Object {
          "content": Object {
            "*/*": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
          "description": "List of user object",
          "required": true,
        },
        "responses": Object {
          "default": Object {
            "content": Object {},
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
        "x-codegen-request-body-name": "body",
      },
    },
    "/user/createWithList": Object {
      "post": Object {
        "operationId": "createUsersWithListInput",
        "requestBody": Object {
          "content": Object {
            "*/*": Object {
              "schema": Object {
                "items": Object {
                  "$ref": "#/components/schemas/User",
                },
                "type": "array",
              },
            },
          },
          "description": "List of user object",
          "required": true,
        },
        "responses": Object {
          "default": Object {
            "content": Object {},
            "description": "successful operation",
          },
        },
        "summary": "Creates list of users with given input array",
        "tags": Array [
          "user",
        ],
        "x-codegen-request-body-name": "body",
      },
    },
    "/user/login": Object {
      "get": Object {
        "operationId": "loginUser",
        "parameters": Array [
          Object {
            "description": "The user name for login",
            "in": "query",
            "name": "username",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
          Object {
            "description": "The password for login in clear text",
            "in": "query",
            "name": "password",
            "required": true,
            "schema": Object {
              "type": "string",
            },
          },
        ],
        "responses": Object {
          "200": Object {
            "content": Object {
              "application/json": Object {
                "schema": Object {
                  "type": "string",
                },
              },
              "application/xml": Object {
                "schema": Object {
                  "type": "string",
                },
              },
            },
            "description": "successful operation",
            "headers": Object {
              "X-Expires-After": Object {
                "description": "date in UTC when token expires",
                "schema": Object {
                  "format": "date-time",
                  "type": "string",
                },
              },
              "X-Rate-Limit": Object {
                "description": "calls per hour allowed by the user",
                "schema": Object {
                  "format": "int32",
                  "type": "integer",
                },
              },
            },
          },
          "400": Object {
            "content": Object {},
            "description": "Invalid username/password supplied",
          },
        },
        "summary": "Logs user into the system",
        "tags": Array [
          "user",
        ],
      },
    },
    "/user/logout": Object {
      "get": Object {
        "operationId": "logoutUser",
        "responses": Object {
          "default": Object {
            "content": Object {},
            "description": "successful operation",
          },
        },
        "summary": "Logs out current logged in user session",
        "tags": Array [
          "user",
        ],
      },
    },
  },
  "servers": Array [
    Object {
      "url": "https://petstore.swagger.io/v2",
    },
    Object {
      "url": "http://petstore.swagger.io/v2",
    },
  ],
  "tags": Array [
    Object {
      "description": "Everything about your Pets",
      "externalDocs": Object {
        "description": "Find out more",
        "url": "http://swagger.io",
      },
      "name": "pet",
    },
    Object {
      "description": "Access to Petstore orders",
      "name": "store",
    },
    Object {
      "description": "Operations about user",
      "externalDocs": Object {
        "description": "Find out more about our store",
        "url": "http://swagger.io",
      },
      "name": "user",
    },
  ],
}
`

exports[`src/openapi3/implementations/openapi3/openapi-traverser.test.ts TAP > must match snapshot 2`] = `
Array [
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "post",
        "path": "/pet/{petId}/uploadImage",
      },
      "conceptualPath": Array [
        "operations",
        "/pet/{}/uploadImage",
        "post",
      ],
      "jsonPath": Array [
        "paths",
        "/pet/{petId}/uploadImage",
        "post",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "post",
      "operationId": "uploadFile",
      "pathPattern": "/pet/{petId}/uploadImage",
      "requestBody": Object {
        "content": Object {
          "multipart/form-data": Object {
            "schema": Object {
              "properties": Object {
                "additionalMetadata": Object {
                  "description": "Additional data to pass to server",
                  "type": "string",
                },
                "file": Object {
                  "description": "file to upload",
                  "format": "binary",
                  "type": "string",
                },
              },
            },
          },
        },
      },
      "security": Array [
        Object {
          "petstore_auth": Array [
            "write:pets",
            "read:pets",
          ],
        },
      ],
      "summary": "uploads an image",
      "tags": Array [
        "pet",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "path": "petId",
        },
        "method": "post",
        "path": "/pet/{petId}/uploadImage",
      },
      "conceptualPath": Array [
        "operations",
        "/pet/{}/uploadImage",
        "post",
        "parameters",
        "path",
        "petId",
      ],
      "jsonPath": Array [
        "paths",
        "/pet/{petId}/uploadImage",
        "post",
        "parameters",
        0,
      ],
      "kind": "path",
    },
    "value": Object {
      "description": "ID of pet to update",
      "in": "path",
      "name": "petId",
      "required": true,
      "schema": Object {
        "format": "int64",
        "type": "integer",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "body": Object {
            "contentType": "multipart/form-data",
          },
        },
        "method": "post",
        "path": "/pet/{petId}/uploadImage",
      },
      "conceptualPath": Array [
        "operations",
        "/pet/{}/uploadImage",
        "post",
        "multipart/form-data",
      ],
      "jsonPath": Array [
        "paths",
        "/pet/{petId}/uploadImage",
        "post",
        "content",
        "multipart/form-data",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "multipart/form-data",
      "flatSchema": Object {},
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/json",
          },
          "statusCode": "200",
        },
        "method": "post",
        "path": "/pet/{petId}/uploadImage",
      },
      "conceptualPath": Array [
        "operations",
        "/pet/{}/uploadImage",
        "post",
        "responses",
        "200",
        "application/json",
      ],
      "jsonPath": Array [
        "paths",
        "/pet/{petId}/uploadImage",
        "post",
        "responses",
        "200",
        "content",
        "application/json",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/json",
      "flatSchema": Object {
        "$ref": "#/components/schemas/ApiResponse",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "200",
        },
        "method": "post",
        "path": "/pet/{petId}/uploadImage",
      },
      "conceptualPath": Array [
        "operations",
        "/pet/{}/uploadImage",
        "post",
        "responses",
        "200",
      ],
      "jsonPath": Array [
        "paths",
        "/pet/{petId}/uploadImage",
        "post",
        "responses",
        "200",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": 200,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "get",
        "path": "/store/inventory",
      },
      "conceptualPath": Array [
        "operations",
        "/store/inventory",
        "get",
      ],
      "jsonPath": Array [
        "paths",
        "/store/inventory",
        "get",
      ],
      "kind": "operation",
    },
    "value": Object {
      "description": "Returns a map of status codes to quantities",
      "method": "get",
      "operationId": "getInventory",
      "pathPattern": "/store/inventory",
      "security": Array [
        Object {
          "api_key": Array [],
        },
      ],
      "summary": "Returns pet inventories by status",
      "tags": Array [
        "store",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/json",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/store/inventory",
      },
      "conceptualPath": Array [
        "operations",
        "/store/inventory",
        "get",
        "responses",
        "200",
        "application/json",
      ],
      "jsonPath": Array [
        "paths",
        "/store/inventory",
        "get",
        "responses",
        "200",
        "content",
        "application/json",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/json",
      "flatSchema": Object {
        "additionalProperties": Object {
          "format": "int32",
          "type": "integer",
        },
        "type": "object",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "200",
        },
        "method": "get",
        "path": "/store/inventory",
      },
      "conceptualPath": Array [
        "operations",
        "/store/inventory",
        "get",
        "responses",
        "200",
      ],
      "jsonPath": Array [
        "paths",
        "/store/inventory",
        "get",
        "responses",
        "200",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": 200,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "post",
        "path": "/store/order",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order",
        "post",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order",
        "post",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "post",
      "operationId": "placeOrder",
      "pathPattern": "/store/order",
      "requestBody": Object {
        "content": Object {
          "*/*": Object {
            "schema": Object {
              "$ref": "#/components/schemas/Order",
            },
          },
        },
        "description": "order placed for purchasing the pet",
        "required": true,
      },
      "summary": "Place an order for a pet",
      "tags": Array [
        "store",
      ],
      "x-codegen-request-body-name": "body",
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "body": Object {
            "contentType": "*/*",
          },
        },
        "method": "post",
        "path": "/store/order",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order",
        "post",
        "*/*",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order",
        "post",
        "content",
        "*/*",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "*/*",
      "flatSchema": Object {
        "$ref": "#/components/schemas/Order",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/xml",
          },
          "statusCode": "200",
        },
        "method": "post",
        "path": "/store/order",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order",
        "post",
        "responses",
        "200",
        "application/xml",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order",
        "post",
        "responses",
        "200",
        "content",
        "application/xml",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/xml",
      "flatSchema": Object {
        "$ref": "#/components/schemas/Order",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/json",
          },
          "statusCode": "200",
        },
        "method": "post",
        "path": "/store/order",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order",
        "post",
        "responses",
        "200",
        "application/json",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order",
        "post",
        "responses",
        "200",
        "content",
        "application/json",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/json",
      "flatSchema": Object {
        "$ref": "#/components/schemas/Order",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "200",
        },
        "method": "post",
        "path": "/store/order",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order",
        "post",
        "responses",
        "200",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order",
        "post",
        "responses",
        "200",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": 200,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "post",
        "path": "/store/order",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order",
        "post",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order",
        "post",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid Order",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
      ],
      "kind": "operation",
    },
    "value": Object {
      "description": "For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions",
      "method": "get",
      "operationId": "getOrderById",
      "pathPattern": "/store/order/{orderId}",
      "summary": "Find purchase order by ID",
      "tags": Array [
        "store",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "path": "orderId",
        },
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
        "parameters",
        "path",
        "orderId",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
        "parameters",
        0,
      ],
      "kind": "path",
    },
    "value": Object {
      "description": "ID of pet that needs to be fetched",
      "in": "path",
      "name": "orderId",
      "required": true,
      "schema": Object {
        "format": "int64",
        "maximum": 10,
        "minimum": 1,
        "type": "integer",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/xml",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
        "responses",
        "200",
        "application/xml",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
        "responses",
        "200",
        "content",
        "application/xml",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/xml",
      "flatSchema": Object {
        "$ref": "#/components/schemas/Order",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/json",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
        "responses",
        "200",
        "application/json",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
        "responses",
        "200",
        "content",
        "application/json",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/json",
      "flatSchema": Object {
        "$ref": "#/components/schemas/Order",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "200",
        },
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
        "responses",
        "200",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
        "responses",
        "200",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": 200,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid ID supplied",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "404",
        },
        "method": "get",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "get",
        "responses",
        "404",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "get",
        "responses",
        "404",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Order not found",
      "statusCode": 404,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "delete",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "delete",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "delete",
      ],
      "kind": "operation",
    },
    "value": Object {
      "description": "For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors",
      "method": "delete",
      "operationId": "deleteOrder",
      "pathPattern": "/store/order/{orderId}",
      "summary": "Delete purchase order by ID",
      "tags": Array [
        "store",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "path": "orderId",
        },
        "method": "delete",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "delete",
        "parameters",
        "path",
        "orderId",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "delete",
        "parameters",
        0,
      ],
      "kind": "path",
    },
    "value": Object {
      "description": "ID of the order that needs to be deleted",
      "in": "path",
      "name": "orderId",
      "required": true,
      "schema": Object {
        "format": "int64",
        "minimum": 1,
        "type": "integer",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "delete",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "delete",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "delete",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid ID supplied",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "404",
        },
        "method": "delete",
        "path": "/store/order/{orderId}",
      },
      "conceptualPath": Array [
        "operations",
        "/store/order/{}",
        "delete",
        "responses",
        "404",
      ],
      "jsonPath": Array [
        "paths",
        "/store/order/{orderId}",
        "delete",
        "responses",
        "404",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Order not found",
      "statusCode": 404,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "post",
        "path": "/user",
      },
      "conceptualPath": Array [
        "operations",
        "/user",
        "post",
      ],
      "jsonPath": Array [
        "paths",
        "/user",
        "post",
      ],
      "kind": "operation",
    },
    "value": Object {
      "description": "This can only be done by the logged in user.",
      "method": "post",
      "operationId": "createUser",
      "pathPattern": "/user",
      "requestBody": Object {
        "content": Object {
          "*/*": Object {
            "schema": Object {
              "$ref": "#/components/schemas/User",
            },
          },
        },
        "description": "Created user object",
        "required": true,
      },
      "summary": "Create user",
      "tags": Array [
        "user",
      ],
      "x-codegen-request-body-name": "body",
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "body": Object {
            "contentType": "*/*",
          },
        },
        "method": "post",
        "path": "/user",
      },
      "conceptualPath": Array [
        "operations",
        "/user",
        "post",
        "*/*",
      ],
      "jsonPath": Array [
        "paths",
        "/user",
        "post",
        "content",
        "*/*",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "*/*",
      "flatSchema": Object {
        "$ref": "#/components/schemas/User",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "default",
        },
        "method": "post",
        "path": "/user",
      },
      "conceptualPath": Array [
        "operations",
        "/user",
        "post",
        "responses",
        "default",
      ],
      "jsonPath": Array [
        "paths",
        "/user",
        "post",
        "responses",
        "default",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": null,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "post",
        "path": "/user/createWithArray",
      },
      "conceptualPath": Array [
        "operations",
        "/user/createWithArray",
        "post",
      ],
      "jsonPath": Array [
        "paths",
        "/user/createWithArray",
        "post",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "post",
      "operationId": "createUsersWithArrayInput",
      "pathPattern": "/user/createWithArray",
      "requestBody": Object {
        "content": Object {
          "*/*": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
        "required": true,
      },
      "summary": "Creates list of users with given input array",
      "tags": Array [
        "user",
      ],
      "x-codegen-request-body-name": "body",
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "body": Object {
            "contentType": "*/*",
          },
        },
        "method": "post",
        "path": "/user/createWithArray",
      },
      "conceptualPath": Array [
        "operations",
        "/user/createWithArray",
        "post",
        "*/*",
      ],
      "jsonPath": Array [
        "paths",
        "/user/createWithArray",
        "post",
        "content",
        "*/*",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "*/*",
      "flatSchema": Object {
        "type": "array",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "default",
        },
        "method": "post",
        "path": "/user/createWithArray",
      },
      "conceptualPath": Array [
        "operations",
        "/user/createWithArray",
        "post",
        "responses",
        "default",
      ],
      "jsonPath": Array [
        "paths",
        "/user/createWithArray",
        "post",
        "responses",
        "default",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": null,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "post",
        "path": "/user/createWithList",
      },
      "conceptualPath": Array [
        "operations",
        "/user/createWithList",
        "post",
      ],
      "jsonPath": Array [
        "paths",
        "/user/createWithList",
        "post",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "post",
      "operationId": "createUsersWithListInput",
      "pathPattern": "/user/createWithList",
      "requestBody": Object {
        "content": Object {
          "*/*": Object {
            "schema": Object {
              "items": Object {
                "$ref": "#/components/schemas/User",
              },
              "type": "array",
            },
          },
        },
        "description": "List of user object",
        "required": true,
      },
      "summary": "Creates list of users with given input array",
      "tags": Array [
        "user",
      ],
      "x-codegen-request-body-name": "body",
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "body": Object {
            "contentType": "*/*",
          },
        },
        "method": "post",
        "path": "/user/createWithList",
      },
      "conceptualPath": Array [
        "operations",
        "/user/createWithList",
        "post",
        "*/*",
      ],
      "jsonPath": Array [
        "paths",
        "/user/createWithList",
        "post",
        "content",
        "*/*",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "*/*",
      "flatSchema": Object {
        "type": "array",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "default",
        },
        "method": "post",
        "path": "/user/createWithList",
      },
      "conceptualPath": Array [
        "operations",
        "/user/createWithList",
        "post",
        "responses",
        "default",
      ],
      "jsonPath": Array [
        "paths",
        "/user/createWithList",
        "post",
        "responses",
        "default",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": null,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "get",
      "operationId": "loginUser",
      "pathPattern": "/user/login",
      "summary": "Logs user into the system",
      "tags": Array [
        "user",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "query": "username",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "parameters",
        "query",
        "username",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "parameters",
        0,
      ],
      "kind": "query",
    },
    "value": Object {
      "description": "The user name for login",
      "in": "query",
      "name": "username",
      "required": true,
      "schema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "query": "password",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "parameters",
        "query",
        "password",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "parameters",
        1,
      ],
      "kind": "query",
    },
    "value": Object {
      "description": "The password for login in clear text",
      "in": "query",
      "name": "password",
      "required": true,
      "schema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "header": "X-Rate-Limit",
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "responses",
        "200",
        "headers",
        "X-Rate-Limit",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "responses",
        "200",
        "headers",
        "X-Rate-Limit",
      ],
      "kind": "header-parameter",
    },
    "value": Object {
      "description": "calls per hour allowed by the user",
      "name": "X-Rate-Limit",
      "schema": Object {
        "format": "int32",
        "type": "integer",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "header": "X-Expires-After",
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "responses",
        "200",
        "headers",
        "X-Expires-After",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "responses",
        "200",
        "headers",
        "X-Expires-After",
      ],
      "kind": "header-parameter",
    },
    "value": Object {
      "description": "date in UTC when token expires",
      "name": "X-Expires-After",
      "schema": Object {
        "format": "date-time",
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/xml",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "responses",
        "200",
        "application/xml",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "responses",
        "200",
        "content",
        "application/xml",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/xml",
      "flatSchema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/json",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "responses",
        "200",
        "application/json",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "responses",
        "200",
        "content",
        "application/json",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/json",
      "flatSchema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "responses",
        "200",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "responses",
        "200",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": 200,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "get",
        "path": "/user/login",
      },
      "conceptualPath": Array [
        "operations",
        "/user/login",
        "get",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/user/login",
        "get",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid username/password supplied",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "get",
        "path": "/user/logout",
      },
      "conceptualPath": Array [
        "operations",
        "/user/logout",
        "get",
      ],
      "jsonPath": Array [
        "paths",
        "/user/logout",
        "get",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "get",
      "operationId": "logoutUser",
      "pathPattern": "/user/logout",
      "summary": "Logs out current logged in user session",
      "tags": Array [
        "user",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "default",
        },
        "method": "get",
        "path": "/user/logout",
      },
      "conceptualPath": Array [
        "operations",
        "/user/logout",
        "get",
        "responses",
        "default",
      ],
      "jsonPath": Array [
        "paths",
        "/user/logout",
        "get",
        "responses",
        "default",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": null,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
      ],
      "kind": "operation",
    },
    "value": Object {
      "method": "get",
      "operationId": "getUserByName",
      "pathPattern": "/user/{username}",
      "summary": "Get user by user name",
      "tags": Array [
        "user",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "path": "username",
        },
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
        "parameters",
        "path",
        "username",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
        "parameters",
        0,
      ],
      "kind": "path",
    },
    "value": Object {
      "description": "The name that needs to be fetched. Use user1 for testing. ",
      "in": "path",
      "name": "username",
      "required": true,
      "schema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/xml",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
        "responses",
        "200",
        "application/xml",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
        "responses",
        "200",
        "content",
        "application/xml",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/xml",
      "flatSchema": Object {
        "$ref": "#/components/schemas/User",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "body": Object {
            "contentType": "application/json",
          },
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
        "responses",
        "200",
        "application/json",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
        "responses",
        "200",
        "content",
        "application/json",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "application/json",
      "flatSchema": Object {
        "$ref": "#/components/schemas/User",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "200",
        },
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
        "responses",
        "200",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
        "responses",
        "200",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "successful operation",
      "statusCode": 200,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid username supplied",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "404",
        },
        "method": "get",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "get",
        "responses",
        "404",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "get",
        "responses",
        "404",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "User not found",
      "statusCode": 404,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "put",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "put",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "put",
      ],
      "kind": "operation",
    },
    "value": Object {
      "description": "This can only be done by the logged in user.",
      "method": "put",
      "operationId": "updateUser",
      "pathPattern": "/user/{username}",
      "requestBody": Object {
        "content": Object {
          "*/*": Object {
            "schema": Object {
              "$ref": "#/components/schemas/User",
            },
          },
        },
        "description": "Updated user object",
        "required": true,
      },
      "summary": "Updated user",
      "tags": Array [
        "user",
      ],
      "x-codegen-request-body-name": "body",
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "path": "username",
        },
        "method": "put",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "put",
        "parameters",
        "path",
        "username",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "put",
        "parameters",
        0,
      ],
      "kind": "path",
    },
    "value": Object {
      "description": "name that need to be updated",
      "in": "path",
      "name": "username",
      "required": true,
      "schema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "body": Object {
            "contentType": "*/*",
          },
        },
        "method": "put",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "put",
        "*/*",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "put",
        "content",
        "*/*",
        "body",
      ],
      "kind": "body",
    },
    "value": Object {
      "contentType": "*/*",
      "flatSchema": Object {
        "$ref": "#/components/schemas/User",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "put",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "put",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "put",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid user supplied",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "404",
        },
        "method": "put",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "put",
        "responses",
        "404",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "put",
        "responses",
        "404",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "User not found",
      "statusCode": 404,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "method": "delete",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "delete",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "delete",
      ],
      "kind": "operation",
    },
    "value": Object {
      "description": "This can only be done by the logged in user.",
      "method": "delete",
      "operationId": "deleteUser",
      "pathPattern": "/user/{username}",
      "summary": "Delete user",
      "tags": Array [
        "user",
      ],
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inRequest": Object {
          "path": "username",
        },
        "method": "delete",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "delete",
        "parameters",
        "path",
        "username",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "delete",
        "parameters",
        0,
      ],
      "kind": "path",
    },
    "value": Object {
      "description": "The name that needs to be deleted",
      "in": "path",
      "name": "username",
      "required": true,
      "schema": Object {
        "type": "string",
      },
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "400",
        },
        "method": "delete",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "delete",
        "responses",
        "400",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "delete",
        "responses",
        "400",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "Invalid username supplied",
      "statusCode": 400,
    },
  },
  Object {
    "location": Object {
      "conceptualLocation": Object {
        "inResponse": Object {
          "statusCode": "404",
        },
        "method": "delete",
        "path": "/user/{username}",
      },
      "conceptualPath": Array [
        "operations",
        "/user/{}",
        "delete",
        "responses",
        "404",
      ],
      "jsonPath": Array [
        "paths",
        "/user/{username}",
        "delete",
        "responses",
        "404",
      ],
      "kind": "response",
    },
    "value": Object {
      "description": "User not found",
      "statusCode": 404,
    },
  },
]
`