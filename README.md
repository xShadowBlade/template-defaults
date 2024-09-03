# @xShadowBlade/create

A CLI tool to quickly start projects, using my own configuration :)

## Installation

```bash
npm init @xshadowblade
```

or

```bash
npx @xshadowblade/create
```

A prompt will appear, asking for the project type and the project name, and other options.

Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

Options:
-   -d, --debug: Debug mode.
-   -y, --yes:  Skip prompts.
-   -h, --help: Show help message.

## Features

- TypeScript
- ESLint
  - Prettier
  - JSDoc plugin
- Esbuild

## Supported Project Types

- `"ts"`: TypeScript project
- `"html-ts"`: HTML and TypeScript project, using webpack
- `"react-ts"`: React and TypeScript project, using webpack
