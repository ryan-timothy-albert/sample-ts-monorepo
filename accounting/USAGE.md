<!-- Start SDK Example Usage [usage] -->
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
      "<value 1>",
      "<value 2>",
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->