// seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationOperation = document.querySelector("#multiplication-operation")
const multiplicationTable = document.querySelector("#multiplication-table");
const titleSpan = document.querySelector("#multiplication-table span");
//funções 
/* Quando a função for executada eu preciso limpar a tabuada anterior ou 
qualquer tipo de informação no meu containe*/

const createTable = (number, multiplicatorNumber) => {
    multiplicationOperation.innerHTML = "";
    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i

        const template = `<div class="row"> <div class="operation">${number} x ${i} = </div> <div class="result">${result}</div></div>`;

        const parser = new DOMParser(); //função permite que converta para HTML
        const templateParser = parser.parseFromString(template, "text/html"); //retornando um HTMLDocument ou XMLDocument.

        const row = templateParser.querySelector(".row");

        multiplicationOperation.appendChild(row);
        console.log(row);


    };
};

// eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);

    titleSpan.innerHTML = number.value;

});