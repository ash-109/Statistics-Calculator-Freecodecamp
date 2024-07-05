const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length; // fonction fléchée retour implicite




const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
};

// Calculer la moyenne
  // const sum = array.reduce((acc, el) => acc + el, 0); // somme de tout les elements
  // const mean = sum/array.length // moyenne = somme / nb d'elements
  // return mean

  