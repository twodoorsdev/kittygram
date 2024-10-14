# Kittygram

## Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Unistyles](https://reactnativeunistyles.vercel.app/)
- [RTK](https://redux-toolkit.js.org/)
- [Jest](https://jestjs.io/)
- [Detox](https://wix.github.io/Detox/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nx](https://nx.dev/)
- [CatAPI](https://thecatapi.com/)

## Development

> [!NOTE]
> Make sure you've followed React Native's [prerequisites](https://reactnative.dev/docs/set-up-your-environment)

> [!NOTE]
> Remember to set your CatAPI API key environment variable in
> `apps/mobile/.env`. Use `.env.example` as a template.

```bash
git clone https://github.com/twodoorsdev/kittygram.git
cd kittygram
bun i
nx run mobile:prebuild --clean
nx run mobile:run-android
# OR
nx run mobile:run-ios
```

## Running E2E tests

Before running the E2E tests, set in `apps/mobile/.env`.

> [!NOTE]
> Make sure you've followed Detox's [prerequisites](https://wix.github.io/Detox/docs/introduction/environment-setup)

> [!WARNING]
> Remember to set your environment variables in both `apps/mobile/.env` and
> `apps/mobile-e2e/.env` before running the tests. Specifically, make sure
> the CatAPI API key is the same in both files, and that `EXPO_PUBLIC_TEST_MODE`
> is `true` in `apps/mobile/.env`.

```bash
nx run mobile:prebuild --clean
nx run mobile:run-android
# OR
nx run mobile:run-ios
nx run mobile-e2e:build -- --configuration ios.sim.release
nx run mobile-e2e:test -- --configuration ios.sim.release
```
