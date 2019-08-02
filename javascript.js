var folieIndex = 1;
zeigtFolien(folieIndex);

function neueBilder(n) {
  zeigtFolien(folieIndex += n);
}

function aktuelleBilder(n) {
  zeigtFolien(folieIndex = n);
}

function zeigtFolien(n) {
  var i;
  var slides = document.getElementsByClassName("carousel");
  var punkte = document.getElementsByClassName("punkt");
  if (n > slides.length) {folieIndex = 1}    
  if (n < 1) {folieIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < punkte.length; i++) {
      punkte[i].className = punkte[i].className.replace(" active", "");
  }
  slides[folieIndex-1].style.display = "block";  
  punkte[folieIndex-1].className += " active";
}