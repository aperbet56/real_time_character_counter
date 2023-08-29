// Récupération des différents élémets
const textarea = document.querySelector("#textarea");
const totalCounter = document.querySelector(".total-counter");
const remainingCounter = document.querySelector(".remaining-counter");

// Déclaration de la fonction updateCounter qui permettre le calcul des lettres, espaces, signes de ponctuation, chiffres et symbole et bloque l'écriture d'autres éléments
const updateCounter = () => {
  totalCounter.textContent = textarea.value.length; // Récupérer et afficher le longueur du texte saisi par l'internaute
  remainingCounter.textContent =
    textarea.getAttribute("maxLength") - textarea.value.length; // calcul du nombre restant de caractère à saisir
};

// Appel de la fonction updateCounter
updateCounter();

// Ecoute de l'événement keyup et appel de la fonction updateCounter
// L'évènement keyup se déclenche lorsque qu'une touche du clavier qui a été pressée est relâchée.
textarea.addEventListener("keyup", updateCounter);
