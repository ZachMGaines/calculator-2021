import {
    add,
    subtract,
   /* multiply,
    divide,*/
} from './utils.js'


const addInput1 = document.getElementById('add-value-1');
const addInput2 = document.getElementById('add-value-2');
const addAnswer = document.getElementById('add-answer');

const subInput1 = document.getElementById('sub-value-1');
const subInput2 = document.getElementById('sub-value-2');
const subAnswer = document.getElementById('sub-answer');

const multiplyInput1 = document.getElementById('multiply-value-1');
const multiplyInput2 = document.getElementById('multiply-value-2');
const multiplyAnswer = document.getElementById('multiply-answer');

const divInput1 = document.getElementById('div-value-1');
const divInput2 = document.getElementById('div-value-2');
const divAnswer = document.getElementById('div-answer');


export function addClick() {
    const value1 = addInput1.valueAsNumber
    const value2 = addInput2.valueAsNumber
    const sum = add(value1, value2) 
    addAnswer.textContent = sum
}

export function subClick() {
    const value1 = subInput1.valueAsNumber
    const value2 = subInput2.valueAsNumber
    const difference = subtract(value1, value2);
    subAnswer.textContent = difference;
}




//FIRST create a function in util.js and import it to handlers.js!

//2nd Make a NEW function in handlers.js that creates the click (export function addClick())
//To do that we 