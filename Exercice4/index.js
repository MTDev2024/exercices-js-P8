const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  // Vérifier si p existe déjà
  if (!document.getElementById("message")) {
    const p = document.createElement("p");
    p.id = "message"; // id pour pouvoir le retrouver
    p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    myButton.parentNode.appendChild(p);
  }
});
