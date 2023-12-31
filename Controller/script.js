// Presente no header do index.html - .tag
function linkInsta() {
  window.open('https://www.instagram.com/cozinhadadelia/', '_blank');
}

// Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " dark-grey";
}
document.getElementById("myLink").click();

//Mensagem de Confirmação do Contato
function showConfirmation() {
  var confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";

  document.getElementById("contactForm").reset();
  setTimeout(function() {
      confirmationMessage.style.display = "none";
  }, 30000);
}