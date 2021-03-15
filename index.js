#!/usr/bin/env node
const chalk = require("chalk");
const sym = require("log-symbols");
const { red: error, yellow: warning, green: success, blue: info } = chalk;
const init = require("./utils/init");

(() => {
  init();
  // Promise.reject(new Error("FFS Tom"));

  console.log(`
  ${sym.error} ${error("error")}
  ${sym.success} ${success("success")}
  ${sym.warning} ${warning("warning")}
  ${sym.info} ${info("info")}
  `);
})();
