function validate(){
var lastname= document.getElementById('lastname').value;
var firstname= document.getElementById('firstname').value;
var city=document.getElementById('city').value;
alert(`
  Nom: ${lastname}
  Prénom: ${firstname}
  Ville: ${city}
`);
}

// on enleve le onclick du html
//dom 0
//document.getElementById("submit").onclick = fonction() {nom de la foncion};
//deuxieme version
//document.getElementById("submit").onmouseover = fonction() {nom de la fonction}
//document.getElementById("submit").ondbclick = fonction() {nom de la fonction}
