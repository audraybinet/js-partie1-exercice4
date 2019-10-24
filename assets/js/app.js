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
