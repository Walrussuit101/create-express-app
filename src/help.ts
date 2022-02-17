import { argumentsHandler } from "./handlers";
import CustomError from "./models";

const validTemplates = argumentsHandler.getValidTemplates();

const main = () => {
    const args = argumentsHandler.getHelpArguments();

    switch (args.lookUp) {
        case "templates":
            if (validTemplates.includes("static")) {
                console.log(
                    `${"\x1b[4m"}static${"\x1b[0m"}` +
                        "\n\n\tThis will create a template with a single html, css, and typescript file. Using webpack the typescript file, and any" +
                        "\n\trequired dependencies, will be compiled to a vanilla JS bundle, which the html file will include using a <script/> tag." +
                        "\n\tAll file retrieval is ran through an express web server, which only serves the html file, css file, and compiled JS bundle.\n"
                );
            }

            break;
        case "options":
            console.log(
                `${"\x1b[4m"}git${"\x1b[0m"}` +
                    "\n\n\tThis will create a git repository with a README and a .gitignore file. An initial commit will also be made.\n"
            );

            break;
        default:
            console.log(
                `${"\x1b[4m"}Arguments:${"\x1b[0m"}` +
                    "\n\n\t1. Project Name" +
                    "\n\t\t - Can only contain a-z, A-Z, 0-9, -, and _ characters." +
                    "\n\n\t2. Template" +
                    `\n\t\t- Valid templates are: ${validTemplates.join(
                        ", "
                    )}` +
                    "\n\t\t- Use 'npm run help templates' for detailed explanations for each template." +
                    "\n\n\t3. Options" +
                    "\n\t\t- Valid options are: git" +
                    "\n\t\t- Use 'npm run help options' for detailed explanations for each option." +
                    `\n\n${"\x1b[4m"}Example usage:${"\x1b[0m"}` +
                    `\n\n\t'npm start my-project ${validTemplates[0]}'` +
                    "\n\n\tThe above command will create a directory 'my-project' in the same directory where" +
                    "\n\tthis codebase is. So, if this is in ~/Documents, there will now be a directory called" +
                    "\n\t~/Documents/my-project with the generated project within.\n"
            );
    }
};

try {
    main();
} catch (e: unknown) {
    e instanceof CustomError ? e.log() : console.error(e);
    process.exit(1);
}
