const unhandled = require("cli-handle-unhandled");
const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");
const packageJson = require("../package.json");

module.exports = () => {
  unhandled();
  checkNode("10");
  welcome({
    title: "nodeinthehole",
    description: packageJson.description,
    version: packageJson.version,
    bgColor: "#47d7ac",
    clear: false,
  });
};
