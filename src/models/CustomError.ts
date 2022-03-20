class CustomError {
    public code: keyof typeof ErrorDetailDictionary;
    public message: string;
    public detail: string;

    constructor(code: keyof typeof ErrorDetailDictionary, message: string) {
        this.code = code;
        this.message = message;
        this.detail = ErrorDetailDictionary[code]; // look up detail using the error code as key
    }
}

const ErrorDetailDictionary = {
    E001:
        "\nPlease provide a project name containing only the following characters:\n\n" +
        "\t a-z, A-Z, 0-9, -, _, and .\n\n" +
        "ex: my-project\n",

    E002:
        "\nPlease provide a project name that doesn't conflict with an\n" +
        "existing directory, or remove said directory.\n",

    E003:
        "\nPlease provide a valid template." +
        "\nUse '--help' to see valid templates.\n",

    E004: "\nPlease install git to initialize a git repository with an initial commit.\n"
};

export default CustomError;
