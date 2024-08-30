/**
 * @file Declares shared library functions and constants.
 */
import process, { argv } from "node:process";
import path from "node:path";
import fs from "fs-extra";
import promptGen from "prompt-sync";

const prompt = promptGen();

const distDir = path.join(__filename, "..");
const commonDir = path.join(distDir, "common");

/**
 * The types of projects that can be created.
 */
type ProjectType = "ts" | "react-ts" | "html-ts";

const projectTypes = fs.readdirSync(path.join(distDir, "templates"));

/**
 * Extracts command-line arguments and flags from the process arguments.
 */
const [args, flags] = ((): [string[], Record<string, string | boolean>] => {
    const argsArray: string[] = [];
    const flagsRecord: Record<string, string | boolean> = {};

    // Argv is an array of strings, split by spaces. Iterate through each item, and check if it is a flag or an argument.
    argv.forEach((item) => {
        if (/^(-|--)/.exec(item)) {
            // If it is a flag (starts with - or --), remove any dashes, and split by =.
            item = item.replace(/(-|--)+/g, "");
            const [flag, value] = item.split("=");

            // If there is a value, set the flag to the value. Otherwise, set it to true.
            flagsRecord[flag] = value || true;
        } else {
            // If it is an argument, push it to the args array.
            argsArray.push(item);
        }
    });
    return [argsArray, flagsRecord];
})();

// If the debug flag is set, log the arguments and flags.
if (flags.d || flags.debug)
    console.log("Argv", argv, "Args:", args, "\n", "Flags:", flags);

/**
 * Cancels the process with a message and code.
 * @param message - The message to log.
 * @param code - The exit code.
 */
function cancel(message = "Cancelled.", code = 0): void {
    console.log(message);
    process.exit(code);
}

/**
 * Replaces all instances of a string or regex in a file.
 * @param filePath - The path to the file.
 * @param searchValue - The value to search for.
 * @param replaceValue - The value to replace with.
 */
function replaceInFile(
    filePath: string,
    searchValue: string | RegExp,
    replaceValue: string,
): void {
    const file = fs.readFileSync(filePath, "utf-8");
    const newFile = file.replace(searchValue, replaceValue);
    fs.writeFileSync(filePath, newFile, "utf-8");
}

export {
    prompt,
    commonDir,
    distDir,
    projectTypes,
    args,
    flags,
    cancel,
    replaceInFile,
};

export type { ProjectType };
