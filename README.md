# Vue 3 + Vite 5 boilerplate by @blatisgense
**Note**: `file.txt` within folders uses to include they in commits.
## Getting started
### Bundler
As a bundler used Vite 5 in case of its benefits:
- Fastest JS/TS bundler at this time.
- Less waiting time for reflecting file updates
- Lighter than Vite 4 by removing deprecated features.
### Components
- **[global](src/components/global)**: Components registered as global.
- **[pages](src/components/pages)**: Pages carcasses.
- **[sections](src/components/sections)**: Sections components.
- **[ui](src/components/ui)**: UI parts (Btns, inputs, ect.).
- **[views](src/components/views)**: Components that visibility depends on route.
### Router
- **[router.ts](src/router/router.ts)**: Vue-router 4 configuration and guards.
- **[routes.ts](src/router/routes.ts)**: List of routes.
### State
Folder for Pinia stores.
### Assets
- **[fonts](src/assets/fonts)**: Font files, connected within **[fonts.scss](src/assets/styles/config/fonts.scss)**.
- **[media](src/assets/media)**: Any media files.
- **[styles](src/assets/styles)**: External styles.
### Tools
- **[EsLint](.eslintrc)**: Sets up rules for code.
- **[Prettier](.prettierrc)**: Sets up styling for code.
- **[Docker compose](docker-compose.yml)**: Deploy docker container and build frontend image. Ready to extend with other services.
- **[Sharp](src/helpers/sharp.ts)**: Transform images with a Sharp library. There is a ready script to use it (**[sharp.ts](src/helpers/sharp.ts)**)
### TypeScript
TypeScript configured for newest features and with aliases for key folders

Define environment variables within **[vite-env.d.ts](src/vite-env.d.ts)**,
Cypress command types in **[cypress.d.ts](cypress/cypress.d.ts)**,
Other types can be placed wherever with `.d.ts` extension or inside main types file **[index.d.ts](src/index.d.ts)** 
### Testing
- **Component and unit**: Provided by Vitest
- **E2E**: Released with Cypress.
### Public
Any static files.
## Contacts
You can link me by the contacts below:
- **[Telegram](https://t.me/Blatisgense)**: @Blatisgense (best way)
- **[Discord](https://discordapp.com/users/559703556295360512)**: blatisgense
- **[Email](mailto:lavr.marudenko@gmail.com)**: lavr.marudenko@gmail.com
