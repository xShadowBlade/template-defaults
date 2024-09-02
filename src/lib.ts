/**
 * @file Declares shared library functions and constants.
 */
import process from "node:process";
import path from "node:path";
import fs from "fs-extra";
import promptGen from "prompt-sync";

/**
 * The prompt function.
 */
const prompt = promptGen();

const distDir = path.join(__filename, "..");
const commonDir = path.join(distDir, "common");

/**
 * The types of projects that can be created.
 */
type ProjectType = "ts" | "react-ts" | "html-ts";

/**
 * The project types. Read from the templates directory for subdirectories.
 * @example ["ts", "react-ts", "html-ts"]
 */
const projectTypes = fs.readdirSync(
    path.join(distDir, "templates"),
) as ProjectType[];

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
    // Check if the file exists.
    if (!fs.existsSync(filePath)) {
        // Silently return if the file does not exist (sometimes package-lock.json does not exist).
        return;
    }

    // Read the contents of the file
    const file = fs.readFileSync(filePath, "utf-8");

    // Replace all instances of the search value with the replace value.
    const newFile = file.replace(searchValue, replaceValue);

    // Write the new file back to the file system.
    fs.writeFileSync(filePath, newFile, "utf-8");
}

export { prompt, commonDir, distDir, projectTypes, cancel, replaceInFile };

export type { ProjectType };
