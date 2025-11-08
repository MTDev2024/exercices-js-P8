const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  // Vérifier si le paragraphe existe déjà
  if (!document.getElementById("message")) {
    const p = document.createElement("p");
    p.id = "message"; // Donner un id pour pouvoir le retrouver
    p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    myButton.parentNode.appendChild(p);
  }
});
