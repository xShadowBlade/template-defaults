/**
 * @file Extracts the arguments and flags from the command line.
 */
import { argv } from "node:process";
import { cancel } from "./lib";

interface Flag {
    /**
     * The name of the flag, or any aliases/shortcuts.
     * Automatically adds -- or - depending on the length of the string.
     *
     * If it is an array, the first item is the full name, and the rest are shortcuts.
     * The flag will be accessed by the full name, and it will be merged with any shortcuts,
     * with the hierarchy being the full name, then the first shortcut, then the second, etc.
     * @example "debug"
     * @example ["debug", "d", "dbg"] // Accessed by --debug. Merged with -d and -dbg, in that order.
     */
    name: string | string[];

    /**
     * The description of the flag.
     * @example "Enable debug mode."
     */
    description: string;

    // type?: "string" | "boolean";

    /**
     * The default value of the flag.
     */
    defaultValue?: string | boolean;

    /**
     * Whether the flag requires a value.
     * @default false
     */
    required?: boolean;
}

// Display help message if requested.
// if (flags.h || flags.help) {
//     console.log(`Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

//     Options:
//         -d, --debug: Debug mode.
//         -y, --yes:  Skip prompts.
//         -h, --help: Show help message.`);
//     cancel("", 0);
// }

const flagsList = [
    {
        // name: ["d", "debug"],
        name: ["debug", "d"],
        description: "Enable debug mode.",
        defaultValue: false,
    },
    {
        // name: ["y", "yes"],
        name: ["yes", "y"],
        description: "Skip prompts.",
        defaultValue: false,
    },
    {
        // name: ["h", "help"],
        name: ["help", "h"],
        description: "Show help message.",
        defaultValue: false,
    },
] as const satisfies Flag[];

// TODO: Implement this.
type FlagsProcessed = Record<
    {
        [K in keyof typeof flagsList]: (typeof flagsList)[K]["name"] extends string[]
            ? (typeof flagsList)[K]["name"][0]
            : (typeof flagsList)[K]["name"];
    }[number],
    string | boolean
>;

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

// TODO: Implement dynamic help message.
/**
 * Displays the help message.
 */
function displayHelp(): void {
    console.log(`Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

        Options:
            -d, --debug: Debug mode.
            -y, --yes:  Skip prompts.
            -h, --help: Show help message.`);
    cancel("", 0);
}

export { args, flags, displayHelp };
