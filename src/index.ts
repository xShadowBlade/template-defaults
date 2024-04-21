#!/usr/bin/env node

/**
 * @file CLI tool for creating React projects with TypeScript.
 */
import process, { argv } from "node:process";
import path from "node:path";
import fs from "fs-extra";
import promptGen from "prompt-sync";
import { exec, execSync } from "node:child_process";

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
let [, , projectType, projectDir, projectName, projectGitRepo, configureEslint, installDep] = args;

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
    // console.log("Help is coming soon. For now, see https://github.com/xShadowBlade/template-defaults");
    console.log(`Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

    Options:
        -d, --debug: Debug mode.
        -y, --yes:  Skip prompts.
        -h, --help: Show help message.`);
    cancel("", 0);
}

if (!(flags["y"] || flags["yes"])) {
    walkThrough();
} else {
    projectType = projectType ?? "ts";
    projectDir = projectDir ?? ".";
    projectName = projectName ?? "my-project";
    projectGitRepo = projectGitRepo ?? "https://github.com/xShadowBlade/template-defaults";
    configureEslint = configureEslint ?? "y";
    installDep = installDep ?? "y";
}
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
    console.log("");
    return prompted;
}

/**
 * Walks the user through the process of creating a new project.
 */
function walkThrough () {
    console.log("This CLI tool will create a new project in the specified directory.");
    console.log("For more information, see https://github.com/xShadowBlade/template-defaults");
    console.log("Press ^C at any time to cancel. \n");

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

    configureEslint = configureEslint ? (() => {
        console.log("Configure ESLint: ", configureEslint);
        return configureEslint;
    })() : setDefaultPrompt({
        initPrompt: "Configure ESLint (y/n) [y]: ",
        defaultMessage: "Using default value 'y'.",
        defaultValue: "y",
        // cancelMessage: "No ESLint configuration specified. Exiting.",
        // cancelCode: 1
    });

    installDep = installDep ? (() => {
        console.log("Install dependencies: ", installDep);
        return installDep;
    })() : setDefaultPrompt({
        initPrompt: "Install dependencies (y/n) [y]: ",
        defaultMessage: "Using default value 'y'.",
        defaultValue: "y",
        // cancelMessage: "No dependencies installation specified. Exiting.",
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

const distDir = path.join(__filename, "..");
// console.log("Dist dir: ", distDir);

// Copy all files from ../common/** to the project directory.
const commonDir = path.join(distDir, "common");
// console.log("Common dir: ", commonDir);
fs.copySync(commonDir, projectDirPath);

const projectTypeTemplateDir = (() => {
    switch (projectType) {
    case "react-ts": return path.join(distDir, "templates", "react-ts");
    case "html-ts": return path.join(distDir, "templates", "html-ts");
    case "ts": default: return path.join(distDir, "templates", "ts");
    }
})();

// Copy all files from the template dir to the project directory.
if (projectTypeTemplateDir) {
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

if (!configureEslint || !["y", "yes", "true"].includes(configureEslint)) {
    fs.removeSync(path.join(projectDirPath, ".eslintrc.json"));
    const eslintDevDeps = [
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-jsdoc",
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
        "prettier",
        "prettier-eslint",
        "eslint-config-react-app",
        "eslint-plugin-react",
    ];
    // replaceInFile(packageJsonPath, /\n {4}"eslint": "\^8.52.0",\n {4}"eslint-config-prettier": "\^9.0.0",\n {4}"eslint-plugin-jsdoc": "\^46.9.0",\n {4}/, "");
    eslintDevDeps.forEach((dep) => {
        replaceInFile(packageJsonPath, new RegExp(`\n {4}"${dep}": ".*",`), "");
    });
    // Remove empty lines.
    replaceInFile(packageJsonPath, /^\s*$/gm, "");
}

replaceInFile(packageJsonPath, /"name": ".*"/, `"name": "${projectName}"`);
replaceInFile(packageJsonPath, /"url": ".*"/, `"url": "${projectGitRepo}"`);
replaceInFile(packageJsonPath, /"url": ".*\/issues"/, `"url": "${projectGitRepo}/issues"`);
replaceInFile(packageJsonPath, /"homepage": ".*"/, `"homepage": "${projectGitRepo}#readme"`);

installDep = installDep ? (() => {
    console.log("Install dependencies: ", installDep);
    return installDep;
})() : setDefaultPrompt({
    initPrompt: "Install dependencies (y/n) [y]: ",
    defaultMessage: "Using default value 'y'.",
    defaultValue: "y",
    // cancelMessage: "No dependencies installation specified. Exiting.",
    // cancelCode: 1
});

if (installDep && ["y", "yes", "true"].includes(installDep)) {
    console.log("\nInstalling dependencies...");

    try {
        execSync("npm install", { cwd: projectDirPath, stdio: "inherit" });
    } catch (error) {
        console.error("Failed to install dependencies.", error);
        process.exit(1);
    }
}

console.log("\nDone!");
const messages = [
    {
        message: "npm install",
        condition: installDep && ["y", "yes", "true"].includes(installDep),
    },
    {
        message: "npm start",
        condition: ["react-ts", "html-ts"].includes(projectType),
    },
];
if (messages.some((msg) => msg.condition)) console.log("To get started, run the following commands:");
messages.forEach((msg) => {
    if (msg.condition) console.log(msg.message);
});

process.exit(0);