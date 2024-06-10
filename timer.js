#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function aaa() {
    let time = await inquirer.prompt({
        name: "time",
        type: "number",
        message: chalk.yellow("Enter a seconds you want to start CountDown :"),
    });
    let count = time.time + 1;
    let start = setInterval(function () {
        count--;
        console.log(chalk.cyan(`Count Down : ${count}`));
        if (count == 0) {
            console.log(chalk.yellow("Your CountDown has Completed"));
            clearInterval(start);
        }
    }, 1000);
}
aaa();
