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
    bootstrap: {
      script: 'yarn install && ionic config set -g npmClient yarn',
      description:
        "Bootstraping a new project, set npmClient to Yarn, so Ionic doesn't use npm for generating",
    },
    dev: {
      web: {
        script: npsUtils.concurrent.nps('env.dev nps watch.web', 'watch.css', 'watch.typegen'),
        description:
          'Running web development server, watch PostCSS transform, watch graphql typegen',
      },
      ios: {
        default: {
          script: npsUtils.concurrent.nps('env.dev nps watch.ios', 'watch.css', 'watch.typegen'),
          description:
            'Run ios development server, watch PostCSS transform, watch graphql typegen',
        },
        phone: {
          script: npsUtils.concurrent.nps(
            'env.dev npx ionic capacitor run ios -l --external',
            'watch.css',
            'watch.typegen'
          ),
          description: 'Run app in actual iOS device',
        },
      },
      android: {
        default: {
          script: npsUtils.concurrent.nps(
            'env.dev nps watch.android',
            'watch.css',
            'watch.typegen'
          ),
          description:
            'Run android development server, watch PostCSS transform, watch graphql typegen',
        },
        phone: {
          script: npsUtils.concurrent.nps(
            'env.dev npx ionic capacitor run android -l --external',
            'watch.css',
            'watch.typegen'
          ),
          description: 'Run app in actual android device',
        },
      },
    },
    storybook: {
      default: {
        script: 'start-storybook -p 9009 -s ./src/styles',
        description: 'Start storybook for web',
      },
      build: {
        script: 'build-storybook -s ./src/styles',
        description: 'Build Storybook to a website',
      },
    },
    open: {
      ios: {
        script: 'cap open ios',
        description: 'Open XCode for iOS app',
      },
      android: {
        script: 'cap open android',
        description: 'Open Android Studio for Android app',
      },
    },
    app: {
      config: {
        script: 'npx cap copy',
        description: 'Copy Capacitor config to mobile apps',
      },
    },
    watch: {
      web: {
        script: 'ionic serve',
        description: 'Run web development server to enable hot reload',
      },
      ios: {
        script: 'ionic cap run ios -l --external',
        description: 'Run android development server to enable hot reload',
      },
      android: {
        script: 'ionic cap run android -l --external',
        description: 'Run android development server to enable hot reload',
      },
      typegen: {
        script: 'nps "apollo.schema.generate --watch"',
        description: 'Generate Apollo schema on client queries change',
      },
      css: {
        script: 'nps "build.css -w"',
        description: 'Watch and transform PostCSS to CSS on .pcss file change',
      },
    },
    build: {
      default: {
        script: 'react-scripts build && ionic cap copy',
        description: 'Build project and use Capacitor to copy to build folder in apps',
      },
      ionic: {
        script: 'ionic cap sync',
        description:
          'Perform an Ionic build, Copy web assets to Capacitor native platform(s), update app dependencies and install Capacitor new plugins',
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
      },
      clean: {
        script: 'lingui extract --clean',
        description: 'Extract translation keys and clean unused keys',
      },
      compile: {
        script: 'lingui compile',
        description: 'Compile translations',
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
