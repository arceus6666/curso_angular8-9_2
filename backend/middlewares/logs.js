const moment = require("moment");
const logger = require('simple-node-logger');

const logger_options = {
    errorEventName:'error',
    logDirectory:'./logs',
    fileNamePattern:'log-<DATE>.log',
    dateFormat:'YYYY.MM.DD'
};

const log = logger.createRollingFileLogger(logger_options);

const logs = (req, res, next) => {
    next();
    console.log(res.statusCode);
    log.info(req.method, " ", 
            req.originalUrl, 
            " Usuario:", req.username, 
            " Fecha:", moment().format('DD-MM-YYYY'), 
            " IP:", req.ip, 
            " Agente:", req.get("User-Agent"));
};

module.exports = logs;