#!/usr/bin/env node

/**
 * @file CLI tool for creating React projects with TypeScript.
 */
import process, { argv } from "node:process";
import path from "node:path";
import fs from "fs-extra";
import promptGen from "prompt-sync";

const prompt = promptGen();

/**
 * Extracts command-line arguments and flags from the process arguments.
 */
const [args, flags] = (() => {
    /**
     * The arguments array.
     */
    const argsA: string[] = [];
    /**
     * The flags object.
     */
    const flagsA: Record<string, string | boolean> = {};
    argv.forEach((item) => {
        if (item.match(/^(-|--)/)) { // If it is a flag
            item = item.replace(/(-|--)+/g, "");
            const arr = item.split("=");
            flagsA[arr[0]] = arr[1] ? arr[1] : true;
        } else {
            argsA.push(item);
        }
    });
    return [argsA, flagsA];
})();

if (flags["d"] || flags["debug"]) console.log("Argv", argv, "Args:", args, "\n", "Flags:", flags);

/**
 * Represents the main entry point for the CLI tool.
 */
let [, , projectType, projectDir, projectName, projectGitRepo /* copyEslint */] = args;

/**
 * Cancels the process with a message and code.
 * @param message - The message to log.
 * @param code - The exit code.
 */
function cancel (message: string = "Cancelled.", code: number = 0) {
    console.log(message);
    process.exit(code);
}

// TODO: Add help message.
if (flags["h"] || flags["help"]) {
    console.log("Help is coming soon. For now, see https://github.com/xShadowBlade/template-defaults");
    cancel("", 0);
}

if (!(flags["y"] || flags["yes"])) {
    walkThrough();
} else {
    projectType = projectType ?? "ts";
    projectDir = projectDir ?? ".";
    projectName = projectName ?? "my-project";
    projectGitRepo = projectGitRepo ?? "https://github.com/xShadowBlade/template-defaults";
}

/**
 * Walks the user through the process of creating a new project.
 */
function walkThrough () {
    console.log("This CLI tool will create a new project in the specified directory.");
    console.log("For more information, see https://github.com/xShadowBlade/template-defaults");
    console.log("Press ^C at any time to cancel. \n");

    interface PromptOptions {
        initPrompt: string;
        defaultMessage?: string;
        defaultValue: string;
        cancelMessage?: string;
        cancelCode?: number;
    }

    /**
     * Function to set the default prompt for a value.
     * @param options - The options for the prompt.
     * @returns The prompted value.
     */
    function setDefaultPrompt (options: PromptOptions) {
        const { initPrompt, defaultMessage, defaultValue, cancelMessage, cancelCode } = options;

        let prompted = prompt(initPrompt);
        if (prompted === null) cancel(cancelMessage, cancelCode);
        prompted = prompted.toLowerCase().trim().replace(/[^a-z-]/g, "");
        if (!prompted) {
            console.log(defaultMessage ?? `Using default value '${defaultValue}'.`);
            prompted = defaultValue;
        }

        return prompted;
    }

    projectType = projectType ? (() => {
        console.log("Project type: ", projectType);
        return projectType;
    })() : setDefaultPrompt({
        initPrompt: "Project type (valid types: 'ts', 'react-ts', 'html-ts'): ",
        defaultMessage: "Using default type 'ts'.",
        defaultValue: "ts",
        // cancelMessage: "No project type specified. Exiting.",
        // cancelCode: 1
    });

    projectDir = projectDir ? (() => {
        console.log("Project directory: ", projectDir);
        return projectDir;
    })() : setDefaultPrompt({
        initPrompt: "Project directory: ",
        defaultMessage: "Using the current working directory.",
        defaultValue: ".",
        // cancelMessage: "No project directory specified. Exiting.",
        // cancelCode: 1
    });

    projectName = projectName ? (() => {
        console.log("Project name: ", projectName);
        return projectName;
    })() : setDefaultPrompt({
        initPrompt: "Project name: ",
        defaultMessage: "Using default name 'my-project'.",
        defaultValue: "my-project",
        // cancelMessage: "No project name specified. Exiting.",
        // cancelCode: 1
    });

    projectGitRepo = projectGitRepo ? (() => {
        console.log("Project git repo: ", projectGitRepo);
        return projectGitRepo;
    })() : setDefaultPrompt({
        initPrompt: "Project git repo: ",
        defaultMessage: "Using default repo 'https://github.com/xShadowBlade/template-defaults', which is the template-defaults repo.",
        defaultValue: "https://github.com/xShadowBlade/template-defaults",
        // cancelMessage: "No project git repo specified. Exiting.",
        // cancelCode: 1
    });

    // Ask for confirmation.
    const confirmation = (prompt("Confirm (y/n) [y]: ") ?? "").toLowerCase();
    if (!["", "y", "yes"].includes(confirmation)) {
        cancel();
    }
}

const projectDirPath = path.join(process.cwd(), projectDir);
// console.log("Project dir: ", projectDirPath);

// Copy all files from ../common/** to the project directory.
const commonDir = path.join(__dirname, ".", "common");
// console.log("Common dir: ", commonDir);
fs.copySync(commonDir, projectDirPath);

const projectTypeTemplateDir = (() => {
    switch (projectType) {
    case "react-ts": return path.join(__dirname, ".", "templates", "react-ts");
    case "html-ts": return path.join(__dirname, ".", "templates", "html-ts");
    case "ts": default: return path.join(__dirname, ".", "templates", "ts");
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
 * @param filePath - The path to the file.
 * @param searchValue - The value to search for.
 * @param replaceValue - The value to replace with.
 */
function replaceInFile (filePath: string, searchValue: string | RegExp, replaceValue: string) {
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