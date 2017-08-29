# Levelup Music

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

First of all, to grab this to your local env you should open an command (terminal or cmd) line (with installed nodejs^6.0 and git). Then open open your directory (by cd ..) and write these lines:

```sh
git clone https://github.com/levelupweb/levelup.film
npm install
npm run build
```

## Usage

### Start Development Workflow

To create your development workflow, you should use npm scripts. Open your command line and write this:

To start webpack with --watch mode
```sh
npm run dev
```

To start local server
```sh
npm run server
```

### Build

Build your project with

```sh
npm run build
```

### Serving

To serve your build folder you may use different techniques such as serve (npm package for serving) or create an server with nodejs. Most usable options is install serve package

```sh
npm run server
```

or for production (required forever package)
```sh
npm run production
```

## Support

Please [open an issue](https://github.com/levelupweb/levelup.film/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/levelupweb/levelup.film/compare/).
