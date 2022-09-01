## Table of Contents

  - [About](#acc-server-configurator)
  - [Feature list](#features)
  - [Tech-Stack](#tech-stack)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [Screenshots](#screenshots)

# ACC Server Configurator (EOL)
This app allows you to manage your assetto corsa competizione game server. You can change the entrylist and every server option which is currently supported (April 2021). It allows you also to view the results of earlier races in detail with all provided informations from the game. There is also a little permission system integrated, so only administrators can change the settings and entrylist, while other users are only allowed to view these.

## Features
- Register with invitation code
- Login
- View race results
- Manage entrylist with steam integration
- Manage settings

## Tech Stack
The frontend is based on vue3 with vuex, vuerouter and axios. Backend is written with nestjs and postgres database.

## Requirements
The listed versions are not strictly needed, but tested with.

- `Node v16`
- `Yarn v1` or `Npm v8.5`
- `.NET5 SDK`

This project has three repositories:
## Getting Started

[Frontend (this)](https://github.com/PsclDev/acc-server-configurator-frontend)

- **`yarn` or `npm i`** *to install the project dependencies*
- Set the required Envs based on the `.env-example` or create a `.env` file, which will be read on start
- **`yarn serve`** to start the app

[Backend](https://github.com/PsclDev/acc-server-configurator-backend)

- **`yarn` or `npm i`** *to install the project dependencies*
- Set the required Envs based on the `.env-example` or create a `.env` file, which will be read on start
- **`yarn start:dev`** to start the app

[File-Watcher](https://github.com/PsclDev/acc-server-configurator-file-watcher)

- **`dotnet restore`** *to install the project dependencies*
- Set the required Envs (currently not documented)
- **`dotnet run`** to start the app`

*`Note to .env: If any env value contains a dollar sign ($) you have to encode that with a backslash (\$)`*

### Access the app:
| Name | Port | Path |
| --- | --- | --- |
| frontend | `8080` | `/*` |
| backend  | `no default` | `/v1/*` |

## Screenshots
| Desktop |
| ---- |
| ![](https://acc-tool.pscl.dev/signup.png) |
| ![](https://acc-tool.pscl.dev/login.png) |
| ![](https://acc-tool.pscl.dev/results.png) |
| ![](https://acc-tool.pscl.dev/entrylist.png) |
| ![](https://acc-tool.pscl.dev/settings_config.png) |
| ![](https://acc-tool.pscl.dev/settings_track.png) |

## Disclaimer
This is my first ever built webproject. So espacially the authorization and authentication is as simple as possible implemented. **I do not recommed to run this app in a public environment** 
