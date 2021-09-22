let gurkKnapp = document.getElementById("gurkknapp")

gurkKnapp.onclick = function bytaTextFunktion() {
  
    let tomat = document.getElementById('tomat');
    tomat.innerHTML = "gurka";
    tomat.style.color = "green";
};