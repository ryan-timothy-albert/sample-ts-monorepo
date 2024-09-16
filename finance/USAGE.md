<!-- Start SDK Example Usage [usage] -->
```typescript
import { FinanceSDK } from "ryan-finance";

const financeSDK = new FinanceSDK();

async function run() {
  const result = await financeSDK.pets.listPets({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->