# User
(*user*)

## Overview

Operations about user

### Available Operations

* [createUser](#createuser) - Create user
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [getUserByName](#getuserbyname) - Get user by user name
* [updateUser](#updateuser) - Update user
* [deleteUser](#deleteuser) - Delete user

## createUser

This can only be done by the logged in user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUser" method="post" path="/user" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.user.createUser({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userCreateUser } from "ryan-accounting/funcs/userCreateUser.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userCreateUser(accountingSDK, {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCreateUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.User](../../models/components/user.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User](../../models/components/user.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createUsersWithListInput

Creates list of users with given input array

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUsersWithListInput" method="post" path="/user/createWithList" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.user.createUsersWithListInput([
    {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userCreateUsersWithListInput } from "ryan-accounting/funcs/userCreateUsersWithListInput.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userCreateUsersWithListInput(accountingSDK, [
    {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCreateUsersWithListInput failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.User[]](../../models/.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User](../../models/components/user.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## loginUser

Logs user into the system

### Example Usage

<!-- UsageSnippet language="typescript" operationID="loginUser" method="get" path="/user/login" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.user.loginUser({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userLoginUser } from "ryan-accounting/funcs/userLoginUser.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userLoginUser(accountingSDK, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userLoginUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## logoutUser

Logs out current logged in user session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="logoutUser" method="get" path="/user/logout" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await accountingSDK.user.logoutUser();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userLogoutUser } from "ryan-accounting/funcs/userLogoutUser.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userLogoutUser(accountingSDK);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("userLogoutUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUserByName

Get user by user name

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserByName" method="get" path="/user/{username}" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.user.getUserByName({
    username: "Edyth10",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userGetUserByName } from "ryan-accounting/funcs/userGetUserByName.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userGetUserByName(accountingSDK, {
    username: "Edyth10",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGetUserByName failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User](../../models/components/user.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## updateUser

This can only be done by the logged in user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUser" method="put" path="/user/{username}" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await accountingSDK.user.updateUser({
    username: "Alison.Cassin",
    user: {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userUpdateUser } from "ryan-accounting/funcs/userUpdateUser.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userUpdateUser(accountingSDK, {
    username: "Alison.Cassin",
    user: {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("userUpdateUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteUser

This can only be done by the logged in user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteUser" method="delete" path="/user/{username}" -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.user.deleteUser({
    username: "Rita_Schuppe",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { userDeleteUser } from "ryan-accounting/funcs/userDeleteUser.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await userDeleteUser(accountingSDK, {
    username: "Rita_Schuppe",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userDeleteUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User](../../models/components/user.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |