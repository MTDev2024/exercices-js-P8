function pairNumbers(min, max) {
  const pairs = [];

  for (let n = min; n <= max; n++) {
    // si n est pair, on l'ajoute au tableau
    if (n % 2 === 0) {
      pairs.push(n);
    }
  }

  // transforme le tableau [2,4,6] en "2,4,6"
  return pairs.join(",");
}

console.log(pairNumbers(1, 10));

// export default pairNumbers;
