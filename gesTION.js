let form = document.getElementById("task-form");

form.addEventListener("submit", function (event) {
    event.preventDefault()
    let input = document.getElementById("task-input");
    let inputValue = input.value;
    let li = document.createElement("li");
    li.textContent = inputValue;
    let ul = document.getElementById("task-list");
    ul.appendChild(li);
    // Ajouter le bouton Supprimer
    //Créer le bouton supprimer
    let bouton = document.createElement("button");
    //Appliquer le texte "Supprimer"
    bouton.textContent = "supprimer";
    //addEventListener > au click > fonction >
    bouton.addEventListener("click", function() {
        // dans l'addEventListener: removeChild le li du ul.
            ul.removeChild(li);
            li.remove;
        })
  //appenChild le bouton dans le li
  li.appendChild(bouton);
  
}
)
//