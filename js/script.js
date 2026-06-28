const form = document.getElementById("form-contact");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const res = document.getElementById("resultat");

    if (nom === "" || email === "" || msg === "") {
        res.textContent = "Remplis tous les champs !";
        res.style.color = "red";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        res.textContent = "Email invalide";
        res.style.color = "red";
        return;
    }

    res.textContent = "Message envoyé, merci " + nom;
    res.style.color = "green";

    form.reset();
});