// TODO: 
// flesh out template options once that is firmly decided.
// maybe also add args to this script? ex: npm run help templates
// would output explanations regarding templates.

console.log(
`
Arguments:
  1. Project Name
    - Can only contain a-z, A-Z, 0-9, -, and _ characters.

  2. Template 
    - Valid templates are:
      -

Example usage:

  "npm start my-project TEMPLATE_NAME"
	
  The above command will create a directory "my-project" in the same directory where
  this codebase is. So, if this is in ~/Documents, there will now be a directory called 
  ~/Documents/my-project with the generated project within.
`
);
