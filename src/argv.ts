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

/**
 * A list of flags and their descriptions.
 */
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

/**
 * A record of the processed flag keys and their values.
 * @example
 * type Test = { debug: string | boolean, yes: string | boolean, ... };
 */
type FlagsProcessed = Record<
    {
        [K in keyof typeof flagsList]: (typeof flagsList)[K]["name" &
            keyof (typeof flagsList)[K]] extends string[]
            ? (typeof flagsList)[K]["name" & keyof (typeof flagsList)[K]][0]
            : (typeof flagsList)[K]["name" & keyof (typeof flagsList)[K]];
    }[number],
    string | boolean
>;

/**
 * The default flags
 * @example const defaultFlags = { debug: false, yes: false, ... };
 */
const defaultFlags = Object.fromEntries(
    flagsList.map((f) => [f.name[0], f.defaultValue || false]),
) as FlagsProcessed;

/**
 * Extracts command-line arguments and flags from the process arguments.
 */
const [args, flags] = ((): [string[], FlagsProcessed] => {
    const argsArray: string[] = [];
    const flagsRecord: Record<string, string | boolean> = {};

    // Argv is an array of strings, split by spaces. Iterate through each item, and check if it is a flag or an argument.
    argv.forEach((item) => {
        if (/^(-|--)/.exec(item)) {
            // If it is a flag (starts with - or --), remove any dashes, and split by =.
            item = item.replace(/(-|--)+/g, "");
            const [flag, value] = item.split("=");

            // If there is a value, set the flag to the value. Otherwise, set it to true.
            switch (value) {
                case "true":
                    flagsRecord[flag] = true;
                    break;
                case "false":
                    flagsRecord[flag] = false;
                    break;
                default:
                    flagsRecord[flag] = value || true;
                    break;
            }
        } else {
            // If it is an argument, push it to the args array.
            argsArray.push(item);
        }
    });

    // Process the flags list.

    // Merge the default flags with the processed flags.
    const mergedFlags: Record<string, string | boolean> = {};

    // For each flag in the flags list, there could be multiple aliases. Merge them.
    // Ex. cmd --myflag=1 --m=2 --> { myflag: 1 } // myflag takes precedence over m.
    flagsList.forEach((flagData) => {
        /**
         * The first item in the name array is the full name of the flag.
         * It is used to access the flag.
         */
        const flagName = flagData.name[0];

        // Set the default value to the default flag value.
        let flagValue: string | boolean = defaultFlags[flagName];

        // Iterate through each flag name, and if it is in the flags record, set the value to the flag
        for (const flagIndiviualName of flagData.name) {
            if (flagsRecord[flagIndiviualName]) {
                flagValue = flagsRecord[flagIndiviualName];
                break;
            }
        }

        // Set the flag value to the merged flags.
        mergedFlags[flagName] = flagValue;
    });

    return [argsArray, mergedFlags as FlagsProcessed];
})();

// If the debug flag is set, log the arguments and flags.
if (flags.debug) {
    console.log("Arguments:", args);
    console.log("Flags:", flags);
}

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
