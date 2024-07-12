#!/usr/bin/env node

/**
 * @file CLI tool for creating React projects with TypeScript.
 */
import process from "node:process";

import { cancel, flags } from "./lib";
import { walkThrough, promptDefaultOptions } from "./options";
import { copyFiles } from "./copy";

// Display help message if requested.
if (flags.h || flags.help) {
    console.log(`Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

    Options:
        -d, --debug: Debug mode.
        -y, --yes:  Skip prompts.
        -h, --help: Show help message.`);
    cancel("", 0);
}

const promptOptions = Object.assign(promptDefaultOptions, ((): typeof promptDefaultOptions => {
    if (flags.y || flags.yes) return {} as typeof promptDefaultOptions;
    return walkThrough();
})());

copyFiles(promptOptions);

process.exit(0);
