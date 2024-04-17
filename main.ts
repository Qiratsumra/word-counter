#! /usr/bin/env node

import inquirer from "inquirer";

console.log(`\t Welcome to CLI based word counter\t`);


const answer:{
    Sentence:string,
} =await inquirer.prompt(
    [
        {
            name:"Sentence",
            type:"input",
            message:"Enter the sentence or paragraph do you want to count:"
        }
    ]
);
const words = answer.Sentence.trim().split(" ");
console.log(words);

console.log(`Your total words in sentence or paragraph is :${words.length}`);
