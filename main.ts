#! /usr/bin/env node 

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bgMagentaBright.whiteBright("\n\n Welcome to the Word counter \n\n"));


let condition = true ;

while (condition) {
    let answer:{
        paragraph:string
    } = await inquirer.prompt(
        [
            {
                name:"paragraph",
                type:"input",
                message:"Enter your sentence or paragraph:"
            }
        ]
    );

    let words =  answer.paragraph.trim().split("");

    console.log(words);

    console.log(chalk.bgBlue.whiteBright(`\n Total sentence or paragraph is: ${words.length}`));

    let anotherAnwser= await inquirer.prompt(
        [
            {
                name:"anotherQuestion",
                type:"confirm",
                message:"Do you want to count more sentence or paragraph:",
                default:false

            }
        ]
    );

    if (anotherAnwser.anotherQuestion === true) {
        let AnotherAnswer :{
            anotherParagraph:string
        } = await inquirer.prompt(
            [
                {
                    name:"anotherParagraph",
                    type:"input",
                    message:"Enter your sentence or paragraph:"
                }
            ]
        );

        let anotherWord = AnotherAnswer.anotherParagraph.trim().split("");

        console.log(anotherWord);
        console.log(chalk.bgBlue.whiteBright(`\n Total sentence or paragraph is: ${anotherWord.length}`));
 condition = false
    }else{
        console.log(chalk.bgMagentaBright.whiteBright("Thanks for using!"));
        condition = false
    }

}