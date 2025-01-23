// Fonction qui gère l'affichage des différents onglet
function showSection(sectionId) {
  // Sélectionner toutes les sections
  const sections = document.querySelectorAll('section');
  // Masquer toutes les sections
  sections.forEach((section) => {section.classList.remove('active');});
  // Afficher la section demandée
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active');
  // Aller à la section demandée
  if(screen.width <=600){
    state = 0;
    toggleMenu();
  } else {
    window.scrollTo({top: activeSection.offsetTop, behavior: 'smooth'});
  }
}

// Fonction qui gère le menu en mode responsive
let state = 1;
let accueil = document.getElementById("accueil-bt");
let photographie = document.getElementById("photographie-bt");
let graphisme = document.getElementById("graphisme-bt");
let contact = document.getElementById("contact-bt");

function toggleMenu() {
  if(state == 1){
    console.log("toggle1");
    accueil.firstChild.style.display = "block";
    photographie.firstChild.style.display = "block";
    graphisme.firstChild.style.display = "block";
    contact.firstChild.style.display = "block";
    accueil.style.height = "100%";
    photographie.style.height = "100%";
    graphisme.style.height = "100%";
    contact.style.height = "100%";
    accueil.style.padding = "2% 0%";
    photographie.style.padding = "2% 0%";
    graphisme.style.padding = "2% 0%";
    contact.style.padding = "2% 0%";
    accueil.style.opacity = "1";
    photographie.style.opacity = "1";
    graphisme.style.opacity = "1";
    contact.style.opacity = "1";
    state = 0;
  } else {
    console.log("toggle2");
    accueil.style.height = "0";
    accueil.style.padding = "0";
    accueil.style.opacity = "0";
    photographie.style.height = "0";
    photographie.style.padding = "0";
    photographie.style.opacity = "0";
    graphisme.style.height = "0";
    graphisme.style.padding = "0";
    graphisme.style.opacity = "0";
    contact.style.height = "0";
    contact.style.padding = "0";
    contact.style.opacity = "0";
    accueil.firstChild.style.display = "none";
    photographie.firstChild.style.display = "none";
    graphisme.firstChild.style.display = "none";
    contact.firstChild.style.display = "none";
    state = 1;
  }
}
