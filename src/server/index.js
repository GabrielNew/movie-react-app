// TEST
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log(chalk.green.bold("ADDING A NOTE"));
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: () => {
    console.log(chalk.green.bold("REMOVING A NOTE"));
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    console.log(chalk.blue.bold("LISTING ALL NOTES"));
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log(chalk.blue.bold("READING A NOTE"));
  },
});

console.log(yargs.argv);
