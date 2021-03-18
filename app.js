// import functions and grab DOM elements

const addInput1 = document.getElementById('add-value-1');
const addInput2 = document.getElementById('add-value-2');
const addAnswer = document.getElementById('add-answer');
const addButton = document.getElementById('add-button');
console.log(addInput1, addInput2, addAnswer, addButton);
// initialize state

addButton.addEventListener('click', () => {
    const addBothValues = addInput1.valueAsNumber + addInput2.valueAsNumber
    console.log(addBothValues)
    
    
    
    // set event listeners to update state and DOM
    
    addAnswer.textContent = addBothValues;
});



const subInput1 = document.getElementById('sub-value-1');
const subInput2 = document.getElementById('sub-value-2');
const subAnswer = document.getElementById('sub-answer');
const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', () => {
    const subBothValues = subInput1.valueAsNumber - subInput2.valueAsNumber
    subAnswer.textContent = subBothValues
});

const multiplyInput1 = document.getElementById('multiply-value-1');
const multiplyInput2 = document.getElementById('multiply-value-2');
const multiplyAnswer = document.getElementById('multiply-answer');
const multiplyButton = document.getElementById('multiply-button');

multiplyButton.addEventListener('click', () => {
    const multiplyValue = multiplyInput1.valueAsNumber * multiplyInput2.valueAsNumber
    multiplyAnswer.textContent = multiplyValue
});

const divInput1 = document.getElementById('div-value-1');
const divInput2 = document.getElementById('div-value-2');
const divAnswer = document.getElementById('div-answer');
const divButton = document.getElementById('div-button');

console.log(divInput1, divInput2, divAnswer, divButton)

divButton.addEventListener('click', () => {
    const divideBothValues = divInput1.valueAsNumber / divInput2.valueAsNumber
    divAnswer.textContent = divideBothValues
})