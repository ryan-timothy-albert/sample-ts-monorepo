<!-- Start SDK Example Usage [usage] -->
```typescript
import { LendingSDK } from "ryan-lending";

const lendingSDK = new LendingSDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await lendingSDK.pet.petsStoreMonday({
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->