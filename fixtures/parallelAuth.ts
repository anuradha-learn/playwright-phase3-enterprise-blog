// import { test as base } from '@playwright/test';
// import { IdentityProvider } from '../auth/IdentityProvider';
// import { WorkerResolver } from '../auth/WorkerResolver';

// export const test = base.extend<{}, { workerStorageState: string }>({
//   workerStorageState: [async ({}, use, testInfo) => {
//     const resolver = new WorkerResolver(new IdentityProvider());
//     const { storagePath } = resolver.resolve(testInfo.parallelIndex);
//     await use(storagePath);
//   }, { scope: 'worker' }],
// });

import { test as base } from '@playwright/test';
import { IdentityProvider } from '../auth/IdentityProvider';
import { WorkerResolver } from '../auth/WorkerResolver';

export const test = base.extend<{}, { workerStorageState: string }>({
  workerStorageState: [async ({}, use, testInfo) => {
    const resolver = new WorkerResolver(new IdentityProvider());
    const { identity, storagePath } = resolver.resolve(testInfo.parallelIndex);
    console.log(`Parallel ${testInfo.parallelIndex} -> ${identity.id}`);
    await use(storagePath);
  }, { scope: 'worker' }],
});
