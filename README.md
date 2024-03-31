# template-defaults

A CLI tool to quickly start projects, using my own configuration :)

## Quick Start

**Requirements**:

- Nodejs
- npm (yarn or pnpm not supported yet)

### Step 1

`cd` into your project directory, then download a [release file](https://github.com/xShadowBlade/template-defaults/blob/main/dist/index.js) using `curl` or `wget`:

```bash
wget https://raw.githubusercontent.com/xShadowBlade/template-defaults/main/dist/index.js -o template-defaults.js
```

or:

```bash
curl https://raw.githubusercontent.com/xShadowBlade/template-defaults/main/dist/index.js -o template-defaults.js
```

### Step 2

Run the install script and follow the prompted instructions:

```bash
node ./template-defaults.js
```

or for a quick start (replace `"html-ts"` with your project type):

```bash
node ./template-defaults.js "html-ts" -y
```

### Step 3 (optional)

Delete the template-defaults directory using file explorer or using a command:

```bash
rm ./template-defaults.js
```

### Combined

Here is a combined single command that you can use:

#### Windows/cmd

```bash
curl https://raw.githubusercontent.com/xShadowBlade/template-defaults/main/dist/index.js -o template-defaults.js ; node ./template-defaults.js ; del ./template-defaults.js
```

#### Linux/bash

```bash
curl https://raw.githubusercontent.com/xShadowBlade/template-defaults/main/dist/index.js -o template-defaults.js && node ./template-defaults.js && rm ./template-defaults.js
```
