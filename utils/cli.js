// const meow = require("meow");
const yargs = require("yargs/yargs")(process.argv.slice(2));

module.exports = () => {
  yargs
    .option("blacklistFiles", {
      alias: "f",
      describe: "files to be excluded from results",
      array: true,
    })
    .option("blacklistDirectories", {
      alias: "d",
      describe: "directories to be excluded from results",
      array: true,
    })
    .option("messages", {
      type: "boolean",
      alias: "m",
      describe: "show messages",
    })
    .help().argv;

  return { args: yargs.argv };
};
