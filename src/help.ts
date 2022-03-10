import { argumentsHandler } from "./handlers";

const validTemplates = argumentsHandler.getValidTemplates();

const helpString = `
Valid arguments:
  project_name:
    - can only contain a-z, A-Z, 0-9, -, and _ characters
    - to make in current directory use .

  template:
    - ${validTemplates.join(", ")}

Template descriptions:
  static:
    This will create a template with a single html, css, and typescript file. Using webpack the typescript file, and any
    required dependencies, will be compiled to a vanilla JS bundle, which the html file will include using a <script/> tag.
    All file retrieval is ran through an express web server, which only serves the html file, css file, and compiled JS bundle.    

  rest-api:
    This will create a bare-bones REST api server. The server has the following valid routes: GET /, GET /users, and GET /user/:id.
    The project will have dedicated controller, service, and route directories. Specifically, there is an example user controller,
    service, and route file. The user service operates on an in-memory array of users to serve in JSON. To add database functionality
    add queries / ORM calls in the service that returns data for the controller to respond with. The template also defaults to allow
    requests from localhost:3000 via CORS, this can be changed in the src/index.ts file. 
`;

export default helpString;
