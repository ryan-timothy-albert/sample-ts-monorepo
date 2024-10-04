<!-- Start SDK Example Usage [usage] -->
```typescript
import { AccountingSDK } from "ryan-accounting";

const accountingSDK = new AccountingSDK();

async function run() {
  const result = await accountingSDK.pets.listPets({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->