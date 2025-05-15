const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emri = form.emri.value.trim();
  const email = form.email.value.trim();
  const mesazhi = form.mesazhi.value.trim();

  if (!emri || !email || !mesazhi) {
    formMessage.textContent = "Ju lutem plotësoni të gjitha fushat!";
    formMessage.style.color = "red";
    return;
  }

  // Për shembull: këtu mund të shtosh funksionalitet dërgimi me API
  // Por për tani thjesht tregojmë mesazh falënderimi

  formMessage.style.color = "#4caf50";
  formMessage.textContent = "Faleminderit për mesazhin tuaj! Do t'ju kontaktojmë së shpejti.";
  form.reset();
});
