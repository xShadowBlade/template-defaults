#!/usr/bin/env node

/**
 * @file CLI tool for creating React projects with TypeScript.
 */
import process from "node:process";

// import { cancel } from "./lib";
import { flags, displayHelp } from "./argv";
import { walkThrough, promptDefaultOptions } from "./options";
import { copyFiles } from "./copy";

// Display help message if requested.
if (flags.h || flags.help) displayHelp();

const promptOptions = Object.assign(
    promptDefaultOptions,
    ((): typeof promptDefaultOptions => {
        if (flags.y || flags.yes) return {} as typeof promptDefaultOptions;
        return walkThrough();
    })(),
);

copyFiles(promptOptions);

process.exit(0);
