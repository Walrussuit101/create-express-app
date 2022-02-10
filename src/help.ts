import { argumentsHandler } from "./handlers";

const validTemplates = argumentsHandler.getValidTemplates();

console.log(
    `
${"\x1b[4m"}Arguments:${"\x1b[0m"}

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
`
);
