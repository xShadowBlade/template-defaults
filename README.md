# template-defaults

A CLI tool to quickly start projects, using my own configuration :)

## Quick Start

**Requirements**:

- Nodejs
- npm (yarn or pnpm not supported yet)
- git

### Step 1

`cd` into your project directory, then clone this repo using git:

```bash
git clone https://github.com/xShadowBlade/template-defaults --depth 1
```

### Step 2

Run the install script and follow the prompted instructions:

```bash
node ./template-defaults
```

or for a quick start (replace `"html-ts"` with your project type):

```bash
node ./template-defaults.js "html-ts" -y
```

### Step 3 (optional)

Delete the template-defaults directory using file explorer or using a command:

```bash
rm -rf ./template-defaults
```

### Combined

Here is a combined single command that you can use:

#### Windows/cmd

```bash
git clone https://github.com/xShadowBlade/template-defaults --depth 1; node ./template-defaults; del /f ./template-defaults
```

#### Linux/bash

```bash
git clone https://github.com/xShadowBlade/template-defaults --depth 1 && node ./template-defaults && rm -rf ./template-defaults
```
