/**
 * @file Copies the source files to the dist folder, and applies the necessary transformations.
 */
import process from "node:process";
import path from "node:path";
import fs from "fs-extra";
import { execSync } from "node:child_process";

import { commonDir, distDir, replaceInFile } from "./lib";
import type { PromptOptionValues } from "./options";

/**
 * Copies the source files to the project folder, and applies the necessary transformations.
 * @param projectOptions - The options for copying the files.
 */
function copyFiles(projectOptions: PromptOptionValues): void {
    const {
        projectType,
        projectDir,
        projectName,
        projectGitRepo,
        configureEslint,
        installDep,
    } = projectOptions;

    /**
     * The path to the project directory.
     */
    const projectDirPath = path.join(process.cwd(), projectDir);
    // console.log("Project dir: ", projectDirPath);
    // console.log("Common dir: ", commonDir);

    // Copy all files from the common directory to the project directory.
    fs.copySync(commonDir, projectDirPath);

    /**
     * The path to the template directory for the project type.
     * @example dist/templates/react-ts
     */
    const projectTypeTemplateDir = path.join(distDir, "templates", projectType);

    // Copy all files from the template dir to the project directory.
    if (projectTypeTemplateDir) {
        // Copy the files from the template directory to the project directory, except /node_modules.
        // fs.copySync(projectTypeTemplateDir, projectDirPath);
        fs.copySync(projectTypeTemplateDir, projectDirPath, {
            filter: (src, dest) => !dest.includes("node_modules"),
        });
    } else {
        // If the project type is invalid, log an error and exit.
        console.error("Invalid project type.");
        process.exit(1);
    }

    // Process the package.json and package-lock.json files.
    const packageJsonPath = path.join(projectDirPath, "package.json");
    const packageLockJsonPath = path.join(projectDirPath, "package-lock.json");

    // Remove the ESLint config if not configuring ESLint.
    if (!configureEslint || !["y", "yes", "true"].includes(configureEslint)) {
        // Remove the .eslintrc.json and .prettierrc.json files.
        fs.removeSync(path.join(projectDirPath, "eslint.config.mjs"));
        fs.removeSync(path.join(projectDirPath, ".prettierrc.json"));

        /**
         * A list of ESLint dev dependencies to remove.
         */
        const eslintDevDeps = [
            "@eslint/js",
            "@types/eslint__js",
            "eslint",
            "eslint-plugin-jsdoc",
            "eslint-plugin-prettier",
            "prettier",
            "typescript-eslint",
            "eslint-plugin-react",
        ];

        // For each eslint dev dependency, remove the dependency from package.json.
        eslintDevDeps.forEach((dep) => {
            replaceInFile(
                packageJsonPath,
                new RegExp(`\n {4}"${dep}": ".*",`),
                "",
            );
        });

        // Remove empty lines.
        replaceInFile(packageJsonPath, /^\s*$/gm, "");
    }

    // Replace package name and repo in package.json
    replaceInFile(packageJsonPath, /"name": ".*"/, `"name": "${projectName}"`);
    replaceInFile(packageJsonPath, /"url": ".*"/, `"url": "${projectGitRepo}"`);

    // Replace the issues and homepage URLs in package.json
    replaceInFile(
        packageJsonPath,
        /"url": ".*\/issues"/,
        `"url": "${projectGitRepo}/issues"`,
    );
    replaceInFile(
        packageJsonPath,
        /"homepage": ".*"/,
        `"homepage": "${projectGitRepo}#readme"`,
    );

    // Replace package name in package-lock.json
    replaceInFile(
        packageLockJsonPath,
        `"name": "${projectType}"`,
        `"name": "${projectName}"`,
    );

    // Install dependencies if the user chooses to.
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

    // Log the next steps for the user.
    const messages = [
        {
            message: "npm install",
            condition:
                !installDep || !["y", "yes", "true"].includes(installDep),
        },
        {
            message: "npm start",
            condition: ["react-ts", "html-ts"].includes(projectType),
        },
    ];

    // If any of the conditions are met, log the messages.
    if (messages.some((msg) => msg.condition))
        console.log("To get started, run the following commands:");

    messages.forEach((msg) => {
        // If the condition is met, log the message.
        if (msg.condition) console.log(msg.message);
    });
}

export { copyFiles };
