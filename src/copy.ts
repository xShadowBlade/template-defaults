/**
 * @file Copies the source files to the dist folder, and applies the necessary transformations.
 */
import process from "node:process";
import path from "node:path";
import fs from "fs-extra";
import { execSync } from "node:child_process";

import { commonDir, distDir, replaceInFile } from "./lib";
import type { promptDefaultOptions } from "./options";

/**
 * Copies the source files to the project folder, and applies the necessary transformations.
 * @param projectOptions - The options for copying the files.
 */
function copyFiles (projectOptions: typeof promptDefaultOptions): void {

    const { projectType, projectDir, projectName, projectGitRepo, configureEslint, installDep } = projectOptions;

    const projectDirPath = path.join(process.cwd(), projectDir);
    // console.log("Project dir: ", projectDirPath);

    // console.log("Common dir: ", commonDir);
    fs.copySync(commonDir, projectDirPath);

    const projectTypeTemplateDir = path.join(distDir, "templates", projectType);

    // Copy all files from the template dir to the project directory.
    if (projectTypeTemplateDir) {
        fs.copySync(projectTypeTemplateDir, projectDirPath);
    }

    const packageJsonPath = path.join(projectDirPath, "package.json");

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
}

export { copyFiles };