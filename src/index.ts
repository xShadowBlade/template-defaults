#!/usr/bin/env node

/**
 * @file CLI tool for creating React projects with TypeScript.
 */
import process from "node:process";
import { flags, displayHelp, debugLog } from "./argv";
import { walkThrough, promptDefaultOptions } from "./options";
import { copyFiles } from "./copy";

// Display help message if requested.
if (flags.help) displayHelp();

const promptOptions = Object.assign(
    promptDefaultOptions,
    ((): typeof promptDefaultOptions => {
        if (flags.yes) return {} as typeof promptDefaultOptions;
        return walkThrough();
    })(),
);

// Print the options if debug mode is enabled.
debugLog("Options:", promptOptions);

// Copy the files to the project directory.
copyFiles(promptOptions);

// Exit the process.
process.exit(0);
