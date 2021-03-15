#!/usr/bin/env node
const handleError = require("cli-handle-error");
const cli = require("./utils/cli");
const init = require("./utils/init");
const data = require("./utils/data");

(() => {
  init();
  const { args } = cli();
  console.log(args);
  // const error_ = new Error(`ffs tom`);
  const error_ = undefined;
  handleError(`Failed while building on step #1`, error_);

  if (args.messages) console.log(data.messages);
  if (args.blacklistDirectories) {
    console.log("blacklisting");
    args.blacklistDirectories.forEach((directory) => {
      console.log(`\t ${directory}`);
    });
  }
})();
