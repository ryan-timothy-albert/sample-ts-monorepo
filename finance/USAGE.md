<!-- Start SDK Example Usage [usage] -->
```typescript
import { FinanceSDK } from "ryan-finance";

const financeSDK = new FinanceSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await financeSDK.pet.petsStoreMonday({
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
<!-- End SDK Example Usage [usage] -->