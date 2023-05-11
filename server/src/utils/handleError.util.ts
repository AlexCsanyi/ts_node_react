import log from "./logger.util";

// TODO: Add type narrowing for error and return error message
const handleError = (error: any) => {
    log.error(error);
};

export default handleError;
