function goToRegister() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("registerSection").style.display = "block";
  window.scrollTo(0, 0);
}

function goBackHome() {
  document.getElementById("registerSection").style.display = "none";
  document.getElementById("homePage").style.display = "block";
  window.scrollTo(0, 0);
}

function handleFormSubmit() {
  alert("Thank you for registering! We will contact you soon.");
  goBackHome();
  return false;
}
