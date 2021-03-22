import {
    addClick,
    subClick,
} from "./handlers.js"


const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addClick)



const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', subClick);

/*
const multiplyButton = document.getElementById('multiply-button');

multiplyButton.addEventListener('click', () => {
    const multiplyValue = multiplyInput1.valueAsNumber * multiplyInput2.valueAsNumber
    multiplyAnswer.textContent = multiplyValue
});


const divButton = document.getElementById('div-button');

console.log(divInput1, divInput2, divAnswer, divButton)

divButton.addEventListener('click', () => {
    const divideBothValues = divInput1.valueAsNumber / divInput2.valueAsNumber
    divAnswer.textContent = divideBothValues
})




//THIS IS THE LAST POINT BEFORE HITTING HTML!!!! IMPORTANT!
*/