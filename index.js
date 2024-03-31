#! usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing the number
// 3) Compare user input with computer number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number(Number limit from 1 to 5);"
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You are right");
}
else {
    console.log("Sorry! You are wrong");
}
