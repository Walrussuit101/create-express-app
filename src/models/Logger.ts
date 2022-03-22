import chalk from "chalk";

import { CustomError } from "./";

class Logger {
    info(message: string) {
        console.log(`[${chalk.green("INFO")}] ${message}`);
    }

    error(customError: CustomError) {
        console.error(
            chalk.red(
                `[${customError.code}] ${customError.message}\n ${customError.detail}`
            )
        );
    }
}

export default Logger;
