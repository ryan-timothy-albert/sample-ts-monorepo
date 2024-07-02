<!-- Start SDK Example Usage [usage] -->
```typescript
import { LendingSDK } from "ryan-lending";

const lendingSDK = new LendingSDK();

async function run() {
    const result = await lendingSDK.pets.listPets({});

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->