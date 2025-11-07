// Version simple
function pairNumbers(min, max) {
  const pairs = [];

  // Boucler de min à max (inclus)
  for (let n = min; n <= max; n++) {
    // Ajouter le nombre au tableau si c'est pair
    if (n % 2 === 0) {
      pairs.push(n);
    }
  }
  // Transformer tableau nombres pairs en chaîne de caracteres séparés par des virgules
  return pairs.join(",");
}

// Afficher le résultat
console.log(pairNumbers(1, 10));

// =======================================================================

// Version stricte
function pairNumbers(min, max) {
  // Vérifier que les arguments sont des nombres
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Les arguments doivent être des nombres");
  }

  // Vérifier que les arguments sont des entiers
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Les arguments doivent être des entiers");
  }

  // Vérifier que min <= max
  if (min > max) throw new Error("min doit être inférieur ou égal à max");

  const pairs = [];

  // Boucler de min à max (inclus)
  for (let n = min; n <= max; n++) {
    // Ajouter le nombre au tableau si c'est pair
    if (n % 2 === 0) pairs.push(n);
  }

  return pairs.join(",");
}
console.log(pairNumbers(1, 10));

// =======================================================================
// Version + robuste (gérer les cas particuliers)
function pairNumbers(min, max) {
  // Vérifier que ce sont des nombres
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Les deux arguments doivent être des nombres");
  }

  // Inverser si min > max pour toujours boucler correctement
  if (min > max) [min, max] = [max, min];

  const pairs = [];

  // Boucler de min à max (inclus), en arrondissant min si nécessaire
  for (let n = Math.ceil(min); n <= max; n++) {
    // Ajouter le nombre au tableau si c'est pair
    if (n % 2 === 0) pairs.push(n);
  }
  return pairs.join(",");
}

console.log(pairNumbers(1, 10));
