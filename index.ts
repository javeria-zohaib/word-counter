import inquirer from "inquirer";
import chalk from "chalk";
 
let answer= await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message: chalk.green("Enter your sentence:"),

}])
let words = answer.sentence.trim().split( " ");
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));

