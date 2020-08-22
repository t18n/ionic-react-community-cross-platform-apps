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

## Styling with BEM -> SUIT

**SUIT** comprises Utilities and Components. Within components there can be Modifiers, Descendants and States.

**SUIT** uses a combination of pascal case (PascalCase), camel case (camelCase) and dashes. Its conventions enforce a limit on the sometimes confusing number of dashes and underscores that can appear in BEM. For example, the BEM class `.search-form\_\_text-field` would be `.SearchForm-textField` in SUIT.

1. Utility
   Utilities handle structure and positional styling, and are written in such a way that they can be applied anywhere in a component. They are prefixed with `u-` and written in camel case. For example, `.u-clearFix`.

2. Component
   A component in SUIT takes the place of a block in BEM. Components are always written in pascal case and are only part of SUIT that uses pascal case, making them easy to identify. For example, `.SearchForm`.

3. Component Namespace
   Components can optionally be prefixed with a namespace and single dash `nmsp-` to ensure conflicts are prevented, e.g. `.mine-SearchForm`.

4. Descendent
   A descendent in SUIT replaces an element in BEM. It uses a single dash - and is written in camel case. For example `.SearchForm-heading`, `.SearchForm-textField` and `.SearchForm-submitButton`.

5. Modifier
   SUIT uses modifiers as does BEM, however their role is more tightly controlled. A SUIT modifier is generally only applied directly to a component, not to a descendent. It should also not be used to represent state changes, as SUIT has a dedicated naming convention for states.
   Modifiers are written in camel case and are preceded by two dashes `--`. For example, `.SearchForm--advanced`.

6. State
   State classes can be used to reflect changes to a component’s state. This allows them to be clearly differentiated from modifiers, which reflect modification of a component’s base appearance regardless of state. If necessary, a state can also be applied to a descendent.
   States are prefixed with is- and are written in camel case. They are also always written as adjoining classes. For example `.SearchForm.is-invalid`.

## Bugs

- [ ] Run `npx ionic capacitor run ios` to serve app on iOS physical device results in white page
