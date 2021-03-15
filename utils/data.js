const chalk = require("chalk");
const sym = require("log-symbols");
const { red: error, yellow: warning, green: success, blue: info } = chalk;

const messages = `
${sym.error} ${error("error")}
${sym.success} ${success("success")}
${sym.warning} ${warning("warning")}
${sym.info} ${info("info")}
`;

module.exports = { messages };
