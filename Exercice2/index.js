function calculate(nombre1, nombre2, operateur) {
  // Vérifier opérateur et effectuer opération correspondante
  if (operateur === "+") {
    // Additionner nombre1 et nombre2
    return nombre1 + nombre2;
  } else if (operateur === "-") {
    // Soustraire nombre2 de nombre1
    return nombre1 - nombre2;
  } else if (operateur === "*") {
    // Multiplier nombre1 par nombre2
    return nombre1 * nombre2;
  } else if (operateur === "/") {
    // Vérifier si division par zéro
    if (nombre2 === 0) {
      // Retourner message d'erreur si division impossible
      return "Division by zero is not allowed";
    }
    // Diviser nombre1 par nombre2
    return nombre1 / nombre2;
  } else {
    // Retourner message d'erreur si opérateur invalide
    return "Invalid operator"; // tout opérateur qui n'est pas +, -, * ou /
  }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"
