#!/usr/bin/env node
const unhandled = require("cli-handle-unhandled");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const checkNode = require("cli-check-node");
const sym = require("log-symbols");
const packageJson = require("./package.json");
const { red: error, yellow: warning, green: success, blue: info } = chalk;

checkNode("10");
unhandled();

Promise.reject(new Error("FFS Tom"));

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
