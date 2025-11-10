function calculate(nombre1, nombre2, operateur) {
  // Convertir arguments en nombres pour gérer les strings
  // '5' -> 5
  nombre1 = Number(nombre1);
  nombre2 = Number(nombre2);

  // Vérifier l'opérateur et effectuer l'opération correspondante
  if (operateur === "+") {
    return nombre1 + nombre2;
  } else if (operateur === "-") {
    return nombre1 - nombre2;
  } else if (operateur === "*") {
    return nombre1 * nombre2;
  } else if (operateur === "/") {
    // Vérifier si division par zéro
    if (nombre2 === 0) {
      return "Division by zero is not allowed";
    }
    return nombre1 / nombre2;
  } else {
    // Retourner message d'erreur si opérateur invalide
    return "Invalid operator";
  }
}

console.log(calculate(5, 3, "+"));
console.log(calculate("5", "3", "+"));
console.log(calculate(10, 4, "-"));
console.log(calculate(7, 2, "*"));
console.log(calculate(12, 3, "/"));
console.log(calculate(8, 0, "/"));
console.log(calculate(4, 5, "%"));

export default calculate;
