function convertToBinary() {
  // Récupération input
  const input = document.getElementById("decimalInput");
  // Récupération paragraphe résultat
  const result = document.getElementById("binaryResult");

  // Suppression espaces inutiles
  const value = input.value.trim();

  // Vérification si vide
  if (value === "") {
    result.textContent = "Veuillez entrer un nombre décimal.";
    return; // stoppe ici
  }

  // Conversion en entier
  let decimalNumber = parseInt(value, 10);

  // Vérification si nombre valide
  if (isNaN(decimalNumber)) {
    result.textContent = "Veuillez entrer un nombre valide.";
    return; // stoppe ici
  }

  // Cas spécial pour 0
  if (decimalNumber === 0) {
    result.textContent = "0";
    return; // stoppe ici
  }

  // Création tableau pour stocker restes
  const binaryArray = [];

  // Conversion en binaire
  while (decimalNumber > 0) {
    // Calcul reste
    const remainder = decimalNumber % 2;
    // Ajout reste au tableau
    binaryArray.push(remainder);
    // Division entière
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  // Inversion tableau pour obtenir le bon ordre
  binaryArray.reverse();

  // Affichage résultat
  result.textContent = binaryArray.join("");
}
