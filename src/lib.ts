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
const projectTypes = fs.readdirSync(path.join(distDir, "templates"));

/**
 * Extracts command-line arguments and flags from the process arguments.
 */
const [args, flags] = ((): [string[], Record<string, string | boolean>] => {
    const argsA: string[] = [];
    const flagsA: Record<string, string | boolean> = {};

    argv.forEach((item) => {
        if (item.match(/^(-|--)/)) { // If it is a flag
            item = item.replace(/(-|--)+/g, "");
            const arr = item.split("=");
            flagsA[arr[0].toLowerCase()] = arr[1] ? arr[1] : true;
        } else {
            argsA.push(item);
        }
    });
    return [argsA, flagsA];
})();

if (flags.d || flags.debug) console.log("Argv", argv, "Args:", args, "\n", "Flags:", flags);

/**
 * Cancels the process with a message and code.
 * @param message - The message to log.
 * @param code - The exit code.
 */
function cancel (message = "Cancelled.", code = 0): void {
    console.log(message);
    process.exit(code);
}

/**
 * Replaces all instances of a string or regex in a file.
 * @param filePath - The path to the file.
 * @param searchValue - The value to search for.
 * @param replaceValue - The value to replace with.
 */
function replaceInFile (filePath: string, searchValue: string | RegExp, replaceValue: string): void {
    const file = fs.readFileSync(filePath, "utf-8");
    const newFile = file.replace(searchValue, replaceValue);
    fs.writeFileSync(filePath, newFile, "utf-8");
}

export { prompt, commonDir, distDir, projectTypes, args, flags, cancel, replaceInFile };