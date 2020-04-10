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
        script: npsUtils.concurrent.nps('env.dev nps watch.web', 'watch.css'),
        description: 'Running web development server, watch and transform PostCSS to CSS',
      },
      ios: {
        script: npsUtils.concurrent.nps('watch.ios', 'watch.css'),
        description: 'Running ios development server, watch and transform PostCSS to CSS',
      },
      android: {
        script: npsUtils.concurrent.nps('watch.android', 'watch.css'),
        description: 'Running android development server, watch and transform PostCSS to CSS',
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
            "license-checker --exclude 'MIT, MIT OR X11, BSD, ISC, Apache-2.0, WTFPL, CC0-1.0'",
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
