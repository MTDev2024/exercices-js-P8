function convertToBinary() {
  const input = document.getElementById("decimalInput");
  const result = document.getElementById("binaryResult");

  // 1. Récupérer saisie + supprimer espaces inutiles
  const value = input.value.trim();

  // 2. Si input vide ou contient autre chose qu’un nombre entier
  if (!/^\d+$/.test(value)) {
    result.textContent = ""; // <p> reste vide pour les saisies invalides
    return; // Stoppe la fonction
  }

  // 3. Conversion input en nombre entier
  let num = Number(value); // Number() est sûr ici car déjà validé par le regex

  // 4. Cas particulier : saisie = 0
  if (num === 0) {
    result.textContent = "0"; // Afficher directement 0
    return;
  }

  // 5. Conversion décimal -> binaire
  const binaryArray = []; // Stocke les restes
  while (num > 0) {
    const remainder = num % 2; // Reste de la division par 2
    binaryArray.push(remainder); // Ajouter le reste dans le tableau
    num = Math.floor(num / 2); // Division entière
  }

  // 6. Inverser le tableau pour obtenir l’ordre correct
  binaryArray.reverse();

  // 7. Afficher le résultat dans le <p>
  result.textContent = binaryArray.join("");
}
