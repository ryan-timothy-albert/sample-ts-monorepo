# Pet
(*pet*)

## Overview

Everything about your Pets

Find out more dfdsiojfidjs
<http://swagger.io>

### Available Operations

* [petsStoreMonday](#petsstoremonday) - Update an existing pet
* [myNewTest](#mynewtest) - Add a new pet to the store
* [findPetsByStatusTypes](#findpetsbystatustypes) - Finds Pets by status
* [findPetsByTags](#findpetsbytags) - Finds Pets by tags
* [getPetByIDS](#getpetbyids) - Find pet by ID
* [deletePet](#deletepet) - Deletes a pet
* [uploadFile](#uploadfile) - uploads an image

## petsStoreMonday

Update an existing pet by Id

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.petsStoreMonday({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petPetsStoreMonday } from "ryan-accounting/funcs/petPetsStoreMonday.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petPetsStoreMonday(accountingSDK, {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Pet](../../models/components/pet.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet](../../models/components/pet.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## myNewTest

Add a new pet to the store

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.myNewTest({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petMyNewTest } from "ryan-accounting/funcs/petMyNewTest.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petMyNewTest(accountingSDK, {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Pet](../../models/components/pet.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet](../../models/components/pet.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## findPetsByStatusTypes

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.findPetsByStatusTypes({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petFindPetsByStatusTypes } from "ryan-accounting/funcs/petFindPetsByStatusTypes.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petFindPetsByStatusTypes(accountingSDK, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindPetsByStatusTypesRequest](../../models/operations/findpetsbystatustypesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet[]](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.findPetsByTags({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petFindPetsByTags } from "ryan-accounting/funcs/petFindPetsByTags.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petFindPetsByTags(accountingSDK, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet[]](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## getPetByIDS

Returns a single pet

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.getPetByIDS({
    petId: 137396,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petGetPetByIDS } from "ryan-accounting/funcs/petGetPetByIDS.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petGetPetByIDS(accountingSDK, {
    petId: 137396,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPetByIDSRequest](../../models/operations/getpetbyidsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet](../../models/components/pet.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## deletePet

Deletes a pet

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.deletePet({
    petId: 441876,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petDeletePet } from "ryan-accounting/funcs/petDeletePet.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petDeletePet(accountingSDK, {
    petId: 441876,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet](../../models/components/pet.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## uploadFile

uploads an image

### Example Usage

```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await accountingSDK.pet.uploadFile({
    petId: 565380,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AccountingSDKCore } from "ryan-accounting/core.js";
import { petUploadFile } from "ryan-accounting/funcs/petUploadFile.js";

// Use `AccountingSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const accountingSDK = new AccountingSDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await petUploadFile(accountingSDK, {
    petId: 565380,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiResponse](../../models/components/apiresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |