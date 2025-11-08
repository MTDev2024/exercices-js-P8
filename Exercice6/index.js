// Ajouter chiffre ou opérateur à l'affichage
function appendToDisplay(val) {
  const display = document.getElementById("display");

  const lastChar = display.value[display.value.length - 1]; // Récupérer dernier caractère affiché

  // Vérifier si user clique sur un opérateur alors que le dernier caractère est déjà un opérateur
  if ("+-*/".includes(val) && "+-*/".includes(lastChar)) {
    // Remplacer l'opérateur précédent par le nouveau
    display.value = display.value.slice(0, -1) + val;
    return; // Stopper ici pour ne pas ajouter deux fois
  }

  // Ajouter chiffre ou opérateur à la fin de l'affichage
  display.value += val;
}

// RAZ Affichage
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = ""; // Clear
}

// Calculer et afficher résultat
function calculateResult() {
  const display = document.getElementById("display");

  // Vérifier si affichage est vide
  if (display.value === "") return; // Si vide, ne rien faire

  // Calculer résultat
  const result = eval(display.value);

  // Vérifier si le résultat est infini (division par zéro)
  if (result === Infinity || result === -Infinity) {
    display.value = "Division par zéro impossible"; // Afficher un message d'erreur
    return; // Stopper la fonction
  }

  // Afficher le résultat dans l'affichage
  display.value = result;
}
