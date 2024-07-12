/**
 * @file Defines the options for making a copy of the source files,
 * as well as the function to walk the user through the process of creating a new project.
 */
import { cancel, prompt } from "./lib";

/**
 * The options for making a copy of the source files.
 */
type PromptOptions = Readonly<{
    initPrompt: string;
    defaultMessage?: string;
    defaultValue: string;
    cancelMessage?: string;
    cancelCode?: number;
}>;

type ProjectType = "ts" | "react-ts" | "html-ts";

const promptOptions = {
    projectType: {
        initPrompt: "Project type (valid types: 'ts', 'react-ts', 'html-ts'): ",
        defaultMessage: "Using default type 'ts'.",
        defaultValue: "ts" as ProjectType,
    },
    projectDir: {
        initPrompt: "Project directory: ",
        defaultMessage: "Using the current working directory.",
        defaultValue: ".",
    },
    projectName: {
        initPrompt: "Project name: ",
        defaultMessage: "Using default name 'my-project'.",
        defaultValue: "my-project",
    },
    projectGitRepo: {
        initPrompt: "Project git repo: ",
        defaultMessage: "Using default repo 'https://github.com/xShadowBlade/template-defaults', which is the template-defaults repo.",
        defaultValue: "https://github.com/xShadowBlade/template-defaults",
    },
    configureEslint: {
        initPrompt: "Configure ESLint (y/n) [y]: ",
        defaultMessage: "Using default value 'y'.",
        defaultValue: "y",
    },
    installDep: {
        initPrompt: "Install dependencies (y/n) [y]: ",
        defaultMessage: "Using default value 'y'.",
        defaultValue: "y",
    },
} satisfies Record<string, PromptOptions>;

const promptDefaultOptions: {
    [K in keyof typeof promptOptions]: (typeof promptOptions)[K]["defaultValue"];
} = ((): typeof promptDefaultOptions => {
    const out: typeof promptDefaultOptions = {} as typeof promptDefaultOptions;
    for (const key in promptOptions) {
        out[key as keyof typeof promptOptions] = promptOptions[key as keyof typeof promptOptions].defaultValue as ProjectType;
    }
    return out;
})();

/**
 * Function to set the default prompt for a value.
 * @param promptOption - The options for the prompt.
 * @returns The prompted value.
 */
function setDefaultPrompt (promptOption: PromptOptions): string {
    const { initPrompt, defaultMessage, defaultValue, cancelMessage, cancelCode } = promptOption;

    let prompted = prompt(initPrompt);
    if (prompted as string | null === null) cancel(cancelMessage, cancelCode);
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
 * @returns The options for the new project.
 */
function walkThrough (): typeof promptDefaultOptions {
    console.log("This CLI tool will create a new project in the specified directory.");
    console.log("For more information, see https://github.com/xShadowBlade/template-defaults");
    console.log("Press ^C at any time to cancel. \n");

    const out: ReturnType<typeof walkThrough> = ((): typeof out => {
        const outTemp: typeof out = {} as typeof out;
        for (const key in promptOptions) {
            outTemp[key as keyof typeof promptOptions] = setDefaultPrompt(promptOptions[key as keyof typeof promptOptions]);
        }
        return outTemp;
    })();

    // Ask for confirmation.
    const confirmation = (prompt("Confirm (y/n) [y]: ")).toLowerCase();
    if (!["", "y", "yes"].includes(confirmation)) {
        cancel();
    }
    return out;
}

export { promptOptions, promptDefaultOptions, walkThrough };
