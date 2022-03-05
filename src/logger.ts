import pino from "pino";
import { PrettyOptions } from "pino-pretty";

const format: PrettyOptions = {
    levelFirst: true,
    translateTime: "SYS:ddd mmm dd yyyy HH:MM:ss"
};

const logger = pino({
    prettyPrint: format
});

export default logger;
