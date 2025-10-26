// JavaScript Document
console.log("hi hi hi");
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





(function () {
  // zoekn HTML naar de knop en het menu.
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('hoofdmenu');

  // Als één van de twee niet bestaat, stopt uitvoeren
  if (!btn || !nav) return;

  // Wanneer ik op de knop klik:
  btn.addEventListener('click', () => {
    // Dan voeg ik de class “is-open” toe of haal ik die weg van het menu.
    // Daarmee laat ik het menu zien of verberg ik het.
    const open = nav.classList.toggle('is-open');

    // Ik pas het attribuut “aria-expanded” aan zodat duidelijk is
    // of het menu open (true) of dicht (false) is.
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Als ik in het menu op een link klik (alleen op kleine schermen):rigo, A. (2025, juni 4). 10+ Hamburger Menu Examples [CSS Only].
  nav.addEventListener('click', (e) => {
    // Controleer of ik op een link klikte en het scherm kleiner is dan 900px.
    if (e.target.closest('a') && window.matchMedia('(max-width: 899px)').matches) {
      // Dan sluit ik het menu door de class “is-open” te verwijderen.
      nav.classList.remove('is-open');

      // En ik zet “aria-expanded” weer op false.
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
