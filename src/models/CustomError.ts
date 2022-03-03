class CustomError {
    private code: keyof typeof ErrorDetailDictionary;

    private message: string;
    private messageColor = "\x1b[31m"; // red color

    private detail: string;
    private detailColor = "\x1b[0m"; // reset color for detail string

    constructor(code: keyof typeof ErrorDetailDictionary, message: string) {
        this.code = code;
        this.message = message;
        this.detail = ErrorDetailDictionary[code]; // look up detail using the error code as key
    }

    log() {
        console.error(`${this.messageColor}${this.code} - ${this.message}`);
        console.error(`${this.detailColor}${this.detail}`);
    }
}

const ErrorDetailDictionary = {
    E001:
        "\nPlease provide a project name containing only the following characters:\n\n" +
        "\t a-z, A-Z, 0-9, -, and _\n\n" +
        "ex: my-project\n",

    E002:
        "\nPlease provide a project name that doesn't conflict with an\n" +
        "existing directory, or remove said directory.\n",

    E003:
        "\nPlease provide a valid template." +
        "\nUse '--help' to see valid templates.\n"
};

export default CustomError;
