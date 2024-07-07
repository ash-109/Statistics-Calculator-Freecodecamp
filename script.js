
// Calcul de la moyenne
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length; // fonction fléchée retour implicite




const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  const mean = getMean(numbers)
const median= getMedian(numbers)


  document.querySelector("#mean").textContent = mean; // afficher la valeur de mean dans le html
  document.querySelector("#median").textContent = median
  //afficher la valeur de median dans le html
};


// calculer la mediane
const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
  array.length % 2 === 0
    ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
    : sorted[Math.floor(array.length / 2)];
return median;
}
const getMode = (array) =>{
  
}



// savoir si la longueur d'un tableau est paire ou impraire (en utilisant le modulo %)

/* const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
// check if array length is even (pair)
let isEven= testArr2.length % 2 === 0
console.log(isEven);

// check if array length is odd (impair)
arr.length % 2 === 1;

!!!! Si le reste est 0, le nombre est pair. Si le reste est 1, le nombre est impair. !!!!
 /*

// Trouver la mediane d'un tableau d'une longueur impaire
// arr[Math.floor(arr.length / 2)] 
// le résultat de la division d’un nombre impair par 2 sera une décimale. Math.floor arrondira au nombre entier le plus proche.
let oddListMedian = testArr1[Math.floor(testArr1.length /2 )]
console.log(oddListMedian);


// Trouver la mediane d'un tableau d'une longueur paire 
// Pour trouver la médiane d’une liste pair de nombres, vous devez trouver les deux nombres intermédiaires et calculer la moyenne de ces nombres.
// first middle number  ----> arr[arr.length / 2];
// second middle number ----> arr[(arr.length / 2) - 1];

/*const firstMiddleNumber = testArr2[testArr2.length / 2];
const secondMiddleNumber = testArr2[(testArr2.length / 2) - 1];
 let evenListMedian = getMean([firstMiddleNumber,secondMiddleNumber])
console.log(evenListMedian);/*

// Calculer la moyenne
  // const sum = array.reduce((acc, el) => acc + el, 0); // somme de tout les elements
  // const mean = sum/array.length // moyenne = somme / nb d'elements
  // return mean

  