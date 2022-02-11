import { argumentsHandler } from './handlers';
import CustomError from './models';

const validTemplates = argumentsHandler.getValidTemplates();

const main = () => {
    const args = argumentsHandler.getHelpArguments();
    
    switch (args.lookUp) {
        case 'templates':
            if (validTemplates.includes("static")) {
                console.log(
`${"\x1b[4m"}static${"\x1b[0m"}

    This will create a template with a single html, css, and typescript file. Using webpack the typescript file, and any
    required dependencies, will be compiled to a vanilla JS bundle, which the html file will include using a <script/> tag. 
    All file retrieval is ran through an express web server, which only serves the html file, css file, and compiled JS bundle.
                `);
            }
            
            break;
        case 'options':
            console.log('options lookup');

            break;
        default:
            console.log(
`${"\x1b[4m"}Arguments:${"\x1b[0m"}

    1. Project Name
        - Can only contain a-z, A-Z, 0-9, -, and _ characters.

    2. Template 
        - Valid templates are: ${validTemplates.join(", ")}
        - Use 'npm run help templates' for detailed explanations for each template.

${"\x1b[4m"}Example usage:${"\x1b[0m"}

    'npm start my-project ${validTemplates[0]}'
        
    The above command will create a directory 'my-project' in the same directory where
    this codebase is. So, if this is in ~/Documents, there will now be a directory called 
    ~/Documents/my-project with the generated project within.
            `);
    }
}

try {
    main();
} catch (e: unknown) {
    (e instanceof CustomError) ? e.log() : console.error(e);
    process.exit(1);
}