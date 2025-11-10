function calculateAverage(array) {
  // Vérifier si tableau vide ou non défini
  if (!array || array.length === 0) {
    return "No numbers to calculate average";
  }

  // Variable pour stocker somme
  let sum = 0;

  // Boucler sur chaque nombre du tableau
  for (let n of array) {
    // Ajouter n à sum
    sum += n;
  }

  // Calculer moyenne en divisant sum par éléments du tableau
  const average = sum / array.length;

  return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
