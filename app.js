// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const newArr = [];
const bigWord = "bocina";

myArray.forEach((elemento) => {
    if (elemento.toString().length > bigWord.length) {
        newArr.push(elemento);
        //console.log(elemento);
        //console.log(newArr);
    }
});

console.log(newArr);

//

const myArray2 = ['insecto', 'bootcamp', 'escritorio'];

const elementosli = document.getElementById("elementosli");

for (let i = 0; i<myArray2.length; i++) {
    const elemntolista = `<li> ${myArray2[i]} </li>`;
    elementosli.innerHTML += elemntolista;
}




