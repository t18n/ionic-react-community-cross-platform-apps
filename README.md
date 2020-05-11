# Ionic React Boilerplate

## Prerequisite

- Required softwares: `node >= 12.x`, `yarn >= 1.20`
- XCode set up with iOS emulator
- Android simulator
- Create `.env/env.<environment-name>.js` file in the same format as `env.sample.js` accordingly

## Getting started

- Clone the project and cd to project folder
- Run `yarn scripts` to show all available commands. The script can then be run with `nps`, for e.g. `yarn nps dev.web`
- Run `yarn nps bootstrap` to install dependencies and bootstrap project
- Run `yarn nps dev.web` to start the web project with hot reload
- Run `yarn nps dev.ios` to start iOS app (may need to start project from XCode) with hot reload
- Run `yarn nps dev.android` to start iOS app (may need to start project from Android Studio) with hot reload

## Development Notes

- To show instructions for all scripts available, run `yarn scripts` or `yarn script <script-name>`
- Add scripts with description to `package.scripts.js` file to keep scripts organize, instead of bloating `package.json`.
- When styling, **only change pcss** file instead of `css.min` files, as they will be overriden.
