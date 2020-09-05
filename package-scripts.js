const npsUtils = require('nps-utils');

module.exports = {
  scripts: {
    env: {
      dev: {
        script: 'env-cmd -e development',
        description: 'Load development script environment into current session',
      },
      prod: {
        script: 'env-cmd -e production',
        description: 'Load production script environment into current session',
      },
    },
    dev: {
      web: {
        script: npsUtils.concurrent.nps(
          'env.dev nps ionic serve -p 8111',
          'watch.css',
          'watch.typegen'
        ),
        description:
          'Running web development server, watch PostCSS transform, watch graphql typegen',
      },
      ios: {
        script: npsUtils.concurrent.nps(
          'env.dev ionic cap run ios -l --external',
          'watch.css',
          'watch.typegen'
        ),
        description: 'Run iOS development server, watch PostCSS transform, watch graphql typegen',
      },
      android: {
        script: npsUtils.concurrent.nps(
          'env.dev ionic cap run android -l --external',
          'watch.css',
          'watch.typegen'
        ),
        description:
          'Run Android development server, watch PostCSS transform, watch graphql typegen',
      },
      storybook: {
        script: npsUtils.concurrent.nps(
          'nps watch.css',
          'start-storybook -p 9009 -s ./src/styles'
        ),
        description: 'Run Storybook development server, watch PostCSS transform',
      },
    },
    app: {
      sync: {
        script: 'ionic cap sync',
        description:
          'Build and compiles web assets, then copy build folder to native platforms. Update Capacitor native platform(s) and dependencies and finally Install any discovered Capacitor or Cordova plugins',
      },
      workspace: {
        script: 'ionic cap open',
        description: 'Open  opens the native project workspace (e.g. XCode, Studio)',
      },
    },
    build: {
      web: {
        script: 'nps "env.prod react-scripts build"',
        description: 'Build web project',
      },
      app: {
        script: 'nps "env.prod nps app.sync"',
        description: 'Build app project',
      },
      storybook: {
        script: 'build-storybook -s ./src/styles',
        description: 'Build Storybook to a website',
      },
      css: {
        script: "postcss 'src/**/!(_).pcss' --base src --dir src --ext min.css",
        description:
          "Transform PostCSS to CSS, excluding '_*.pcss' files and keep folder structure",
      },
    },
    apollo: {
      schema: {
        download: {
          script:
            'apollo schema:download --endpoint=http://localhost:4001/graphql src/graphql/schema.gen.json',
          description:
            'Download GraphQL schema on the server and save it locally to generate type',
        },
        generate: {
          script:
            'apollo codegen:generate --localSchemaFile=src/graphql/schema.gen.json --target=typescript --includes=src/**/*.ts,src/**/*.tsx --tagName=gql --addTypename --globalTypesFile=src/types/graphql-types.gen.ts types',
          description: 'Generate types for GraphQL operations or fragments from GraphQL schema',
        },
      },
    },
    i18n: {
      extract: {
        script: 'lingui extract',
        description: 'Extract translation keys',
        clean: {
          script: 'lingui extract --clean',
          description: 'Extract translation keys and clean unused keys',
        },
      },
      compile: {
        script: 'lingui compile',
        description: 'Compile translations',
      },
    },
    watch: {
      typegen: {
        script: 'nps "apollo.schema.generate --watch"',
        description: 'Generate Apollo schema on client queries change',
      },
      css: {
        script: 'nps "build.css -w"',
        description: 'Watch and transform PostCSS to CSS on .pcss file change',
      },
    },
    test: {
      script: 'react-scripts test --env=jsdom',
      description: 'Run Jest text',
    },
    typecheck: {
      script: 'tsc --noEmit --skipLibCheck',
      description: 'Run Typescript typechecking without emitting any code',
    },
    format: {
      script: "prettier --write '**/*.{ts,tsx,js,jsx}'",
      description: 'Format code with Prettier',
    },
    lint: {
      default: {
        script: npsUtils.concurrent.nps('env.dev nps lint.js', 'lint.ts', 'lint.css'),
        description: 'Check JS lint, TS type and CSS lint',
      },
      js: {
        default: {
          script: "eslint './src/**/*.{ts,tsx}'",
          description: 'Show TS/JS linting errors with ESLint',
        },
        fix: {
          script: "nps 'lint.js --fix'",
          description:
            'Show TS/JS linting errors with ESLint and automatically fix all fixable errors',
        },
      },
      css: {
        script: "stylelint '**/*.pcss'",
        description: 'Lint CSS and show errors with Stylelint',
      },
      ts: {
        script: 'tsc -p tsconfig.json --noEmit',
        description: 'Type checking',
      },
    },
    license: {
      check: {
        default: {
          script:
            "license-checker --exclude 'MIT, MIT OR X11, BSD, ISC, Apache-2.0, WTFPL, CC0-1.0, MPL'",
          description: 'Check dependencies license sand show all non-permissive license',
        },
        sum: {
          script: "nps 'license.check --summary'",
          description: 'Check dependencies license sand briefly show all non-permissive license',
        },
      },
    },
  },
};
