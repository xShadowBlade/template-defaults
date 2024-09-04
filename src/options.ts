/**
 * @file Defines the options for making a copy of the source files,
 * as well as the function to walk the user through the process of creating a new project.
 */
import { cancel, prompt } from "./lib";
import type { ProjectType } from "./lib";

/**
 * The options for making a copy of the source files.
 */
type PromptOptions = Readonly<{
    /**
     * The inital prompt when asking the question
     * @example "Project type (valid types: 'ts', 'react-ts', 'html-ts'): "
     */
    initPrompt: string;

    /**
     * The meessage when nothing is entered
     * @example "Using default type 'ts'."
     */
    defaultMessage?: string;

    /**
     * The default value for the prompt
     * @example "ts"
     */
    defaultValue: string;

    /**
     * The message when the user cancels
     * @example "User cancelled."
     */
    cancelMessage?: string;

    /**
     * The code when the user cancels
     * @example 1
     */
    cancelCode?: number;

    /**
     * The help message/description
     * @example "The type of project to create."
     */
    helpMessage?: string;
}>;

/**
 * The options
 */
const promptOptions = {
    /**
     * The project type
     */
    projectType: {
        initPrompt: "Project type (valid types: 'ts', 'react-ts', 'html-ts'): ",
        defaultMessage: "Using default type 'ts'.",
        defaultValue: "ts" as ProjectType,
    },

    /**
     * The project directory
     */
    projectDir: {
        initPrompt: "Project directory: ",
        defaultMessage: "Using the current working directory.",
        defaultValue: ".",
    },

    /**
     * The project name, used for package.json
     */
    projectName: {
        initPrompt: "Project name: ",
        defaultMessage: "Using default name 'my-project'.",
        defaultValue: "my-project",
    },

    /**
     * The project git repo, used for package.json
     */
    projectGitRepo: {
        initPrompt: "Project git repo: ",
        defaultMessage:
            "Using default repo 'https://github.com/xShadowBlade/template-defaults', which is the template-defaults repo.",
        defaultValue: "https://github.com/xShadowBlade/template-defaults",
    },

    /**
     * Whether to configure ESLint
     */
    configureEslint: {
        initPrompt: "Configure ESLint (y/n) [y]: ",
        defaultMessage: "Using default value 'y'.",
        defaultValue: "y",
    },

    /**
     * Whether to install dependencies
     */
    installDep: {
        initPrompt: "Install dependencies (y/n) [y]: ",
        defaultMessage: "Using default value 'y'.",
        defaultValue: "y",
    },
} satisfies Record<string, PromptOptions>;

/**
 * The default values for the prompt options.
 * @example { projectType: ProjectType, projectDir: string, ... }
 */
type PromptOptionValues = {
    [K in keyof typeof promptOptions]: (typeof promptOptions)[K]["defaultValue"];
};

/**
 * Extracts the default values from the prompt options.
 */
const promptDefaultOptions: PromptOptionValues = ((): PromptOptionValues => {
    const out = {} as PromptOptionValues;

    // For each key in promptOptions, set the default value.
    for (const key in promptOptions) {
        // @ts-expect-error - I could type this but that would make it less readable.
        out[key] = promptOptions[key].defaultValue;
    }

    return out;
})();

/**
 * Function to set the default prompt for a value.
 * @template T - The type of the prompt options.
 * @param promptOption - The options for the prompt.
 * @returns The prompted value.
 */
function setDefaultPrompt<T extends PromptOptions>(
    promptOption: T,
): T["defaultValue"] {
    const {
        initPrompt,
        defaultMessage,
        defaultValue,
        cancelMessage,
        cancelCode,
    } = promptOption;

    /**
     * The prompted value, after asking the user.
     * @example "ts"
     */
    let prompted = prompt(initPrompt);

    // If the user cancels (by pressing ^C = null), cancel the process.
    if ((prompted as string | null) === null) cancel(cancelMessage, cancelCode);

    // Normalize the input.
    prompted = prompted
        .toLowerCase()
        .trim()
        // Remove all characters except a-z and hyphens.
        .replace(/[^a-z-]/g, "");

    // If the input is empty, use the default value.
    if (!prompted) {
        console.log(defaultMessage ?? `Using default value '${defaultValue}'.`);
        prompted = defaultValue;
    }

    // Log a newline.
    console.log("");

    return prompted;
}

/**
 * Walks the user through the process of creating a new project.
 * @returns The options for the new project.
 */
function walkThrough(): typeof promptDefaultOptions {
    // Log the introduction.
    console.log(
        "This CLI tool will create a new project in the specified directory.",
    );
    console.log(
        "For more information, see https://github.com/xShadowBlade/template-defaults",
    );
    console.log("Press ^C at any time to cancel. \n");

    const out = {} as typeof promptDefaultOptions;

    // For each key in promptOptions, set the default value.
    for (const key in promptOptions) {
        // @ts-expect-error - I could type this but that would make it less readable.
        out[key] = setDefaultPrompt(promptOptions[key]);
    }

    // Ask for confirmation.
    const confirmation = prompt("Confirm (y/n) [y]: ");

    // If the user cancels, cancel the process.
    if (
        !confirmation ||
        !["", "y", "yes"].includes(confirmation.toLowerCase())
    ) {
        cancel();
    }

    return out;
}

export { promptOptions, promptDefaultOptions, walkThrough };
export type { PromptOptions, PromptOptionValues };
