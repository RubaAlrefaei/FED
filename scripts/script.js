// JavaScript Document
console.log("hi");
// Pak de elementen uit de HTML
const popup = document.getElementById('popup');       // het <dialog>-venster
const openBtn = document.getElementById('openPopup'); // de knop "Meld aan voor de nieuwsbrief"
const closeBtn = document.getElementById('closePopup'); // de knop "Sluiten" in het popup

// Controleer of alles bestaat (veiligheid)
if (popup && openBtn && closeBtn) {

  // Wanneer iemand op de knop klikt → open popup
  openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // voorkomt dat de <a href="#"> naar boven springt
    popup.showModal();  // opent het <dialog>-venster
  });

  // Wanneer iemand op "Sluiten" klikt → sluit popup
  closeBtn.addEventListener('click', () => {
    popup.close(); // sluit het <dialog>-venster
  });
}
