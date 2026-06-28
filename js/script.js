var form = document.getElementById("form-contact");

form.onsubmit = function(e) {
  e.preventDefault();

  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("message").value;
  var res = document.getElementById("resultat");

  if (nom == "" || email == "" || msg == "") {
    res.innerHTML = "Remplis tous les champs !";
    res.style.color = "red";
    return false;
  }

  if (email.indexOf("@") < 0) {
    res.innerHTML = "Met un @ dans l'email";
    res.style.color = "red";
    return false;
  }

  res.innerHTML = "Message envoye merci " + nom;
  res.style.color = "green";
  form.reset();
};