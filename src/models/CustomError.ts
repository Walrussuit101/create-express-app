class CustomError{
    public code: keyof typeof ErrorDetailDictionary;

    public message: string;
    public messageColor = "\x1b[31m"; // red color
    
    public detail: string;
    public detailColor = "\x1b[0m"; // reset color for detail string

    constructor(code: keyof typeof ErrorDetailDictionary, message: string){
        this.code = code;
        this.message = message;
        this.detail = ErrorDetailDictionary[code]; // look up detail using the error code as key
    }

    log(){
        console.error("\x1b[31m", this.code, "-", this.message);
		console.error("\x1b[0m", this.detail);
    }
}

const ErrorDetailDictionary = {
    "E001": "\nPlease provide the minimum arguments:\n\n" +
            "\t1st: Project Name\n" +
            "\t2nd: Template\n\n" +
            "ex: npm start my-project skeleton\n",

    "E002": "\nPlease provide a project name containing only the follow characters:\n\n" +
            "\t a-z, A-Z, 0-9, -, and _\n\n" +
            "ex: npm start my-project skeleton\n",

    "E003": "\nPlease provide a project name that doesn't conflict with an\n" +
            "existing directory, or remove said directory.\n",
    
    "E004": "\nPlease provide a valid template." + 
            "\nUse 'npm run help templates' to see valid options.\n"
}

export default CustomError;