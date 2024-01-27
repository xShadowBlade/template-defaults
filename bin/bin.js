#!/usr/bin/env node

/**
 * @fileovervew CLI tool for creating React projects with TypeScript.
 */

const path = require("path");
const fs = require("fs-extra");
const prompt = require("prompt-sync")();
const { argv } = require("process");

/**
 * Extracts command-line arguments and flags from the process arguments.
 * @returns {[string[], {[flag: string]: string | boolean}]} Tuple containing arguments and flags.
 */
const [args, flags] = (() => {
    const argsA = [];
    const flagsA = {};
    argv.forEach((item) => {
        if (item.match(/(-|--)+/)) { // If it is a flag
            item = item.replace(/(-|--)+/g, "");
            const arr = item.split("=");
            flagsA[arr[0]] = arr[1] ? arr[1] : true;
        } else {
            argsA.push(item);
        }
    });
    return [argsA, flagsA];
})();

if (flags["d"] || flags["debug"]) console.log("Args:", args, "\n", "Flags:", flags);

/**
 * Represents the main entry point for the CLI tool.
 */
let [, projectType, projectDir, projectName, projectGitRepo, copyEslint] = args;

// TODO: Add help message.
if (flags["h"] || flags["help"]) {
    console.log("Coming soon! For now, see https://github.com/xShadowBlade/template-defaults");
    cancel("", 0);
}

// if (flags["y"] || flags["yes"]) {
//      
// }

console.log("This CLI tool will create a new project in the specified directory.");
console.log("For more information, see https://github.com/xShadowBlade/template-defaults");
console.log("Press ^C at any time to cancel. \n");

function cancel (message = "Cancelled.", code = 0) {
    console.log(message);
    process.exit(code);
}

// If the user did not specify a project type, warn them and set a default type.
if (!projectType) {
    projectType = prompt("Project type (valid types: 'ts', 'react-ts', 'html-ts'): ");
    if (projectType === null) cancel();
    projectType = projectType.toLowerCase().replace(/[^a-z-]/g, "");
    if (!projectType) {
        console.log("No project type specified. Using default type 'ts'.");
        projectType = "ts";
    }
    console.log("");
}

// If the user did not specify a project directory, warn them and set a default directory.
if (!projectDir) {
    projectDir = prompt("Project directory: ");
    if (projectDir === null) cancel();
    if (!projectDir) {
        console.log("No project directory specified. Using the current working directory.");
        projectDir = ".";
    }
    console.log("");
}

// If the user did not specify a project name, warn them and set a default name.
if (!projectName) {
    projectName = prompt("Project name: ");
    if (projectName === null) cancel();
    if (!projectName) {
        console.log("No project name specified. Using default name 'my-project'.");
        projectName = "my-project";
    }
    console.log("");
}

// If the user did not specify a project git repo, warn them and set a default repo.
if (!projectGitRepo) {
    projectGitRepo = prompt("Project git repo: ");
    if (projectGitRepo === null) cancel();
    if (!projectGitRepo) {
        console.log("No project git repo specified. Using default repo 'https://github.com/xShadowBlade/template-defaults', which is the template-defaults repo.");
        projectGitRepo = "https://github.com/xShadowBlade/template-defaults";
    }
    console.log("");
}

// Ask for confirmation.
const confirmation = (prompt("Confirm (y/n) [y]: ") ?? "").toLowerCase();
if (!["", "y", "yes"].includes(confirmation)) {
    cancel();
}

const projectDirPath = path.join(process.cwd(), projectDir);
// console.log("Project dir: ", projectDirPath);

// Copy all files from ../common/** to the project directory.
const commonDir = path.join(__dirname, "..", "common");
// console.log("Common dir: ", commonDir);
fs.copySync(commonDir, projectDirPath);

const projectTypeTemplateDir = (() => {
    switch (projectType) {
        case "react-ts": return path.join(__dirname, "..", "templates", "react-ts");
        case "html-ts": return path.join(__dirname, "..", "templates", "html-ts");
        case "ts": default: return path.join(__dirname, "..", "templates", "ts");
    }
})();

// Copy all files from the template dir to the project directory.
if (projectTypeTemplateDir) {
    // console.log("Project type: ", projectType);
    // console.log("Template dir: ", projectTypeTemplateDir);
    fs.copySync(projectTypeTemplateDir, projectDirPath);
}

// Replace the project name and git repo in package.json.

/**
 * Replaces all instances of a string or regex in a file.
 * @param {string} filePath - The path to the file.
 * @param {string|RegExp} searchValue - The value to search for.
 * @param {string} replaceValue - The value to replace with.
 */
function replaceInFile (filePath, searchValue, replaceValue) {
    const file = fs.readFileSync(filePath, "utf-8");
    const newFile = file.replace(searchValue, replaceValue);
    fs.writeFileSync(filePath, newFile, "utf-8");
}

const packageJsonPath = path.join(projectDirPath, "package.json");
// const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
// packageJson.name = projectName;
// packageJson.repository.url = projectGitRepo;
// packageJson.bugs.url = `${projectGitRepo}/issues`;
// packageJson.homepage = `${projectGitRepo}#readme`;

replaceInFile(packageJsonPath, /"name": ".*"/, `"name": "${projectName}"`);
replaceInFile(packageJsonPath, /"url": ".*"/, `"url": "${projectGitRepo}"`);
replaceInFile(packageJsonPath, /"url": ".*\/issues"/, `"url": "${projectGitRepo}/issues"`);
replaceInFile(packageJsonPath, /"homepage": ".*"/, `"homepage": "${projectGitRepo}#readme"`);

console.log("Done!");
console.log("To get started, run the following commands:");
console.log("npm install");
if (["react-ts", "html-ts"].includes(projectType)) console.log("npm start");

process.exit(0);