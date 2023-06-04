// Funktion zum Umschalten des Modus
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// Event-Listener für den Button
var darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);
