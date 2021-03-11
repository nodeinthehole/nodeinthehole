#!/usr/bin/env node
const packageJson = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const sym = require("log-symbols");
const { red: error, yellow: warning, green: success, blue: info } = chalk;

welcome({
  title: "nodeinthehole",
  description: packageJson.description,
  version: packageJson.version,
  bgColor: "#47d7ac",
  clear: false,
});

console.log(`
${sym.error} ${error("error")}
${sym.success} ${success("success")}
${sym.warning} ${warning("warning")}
${sym.info} ${info("info")}
`);
