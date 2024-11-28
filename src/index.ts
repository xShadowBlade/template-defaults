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

// Set the prompt options.
const promptOptions = Object.assign(
    promptDefaultOptions,
    ((): typeof promptDefaultOptions => {
        // If the yes flag is enabled, return the default options.
        if (flags.yes) return {} as typeof promptDefaultOptions;

        // Otherwise, walk the user through the process.
        return walkThrough();
    })(),
);

// Print the options if debug mode is enabled.
debugLog("Options:", promptOptions);

// Copy the files to the project directory.
copyFiles(promptOptions);

// Exit the process.
process.exit(0);
