Procesverslag

Markdown is een simpele manier om HTML te schrijven.
Markdown cheat cheet: Hulp bij het schrijven van Markdown
.

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door open toe te voegen aan een details element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

Jij
<details open> <summary>uitwerken voor kick-off werkgroep</summary>

hier je focus (kies uit responsive óf surface plane)

Auteur: Ruba
Je startniveau:

blauw (beginner) – ik heb nog weinig ervaring met HTML, CSS en JavaScript en wil vooral de basis goed leren.

Je focus:

responsive – ik wil oefenen om mijn website mobile-first te bouwen en daarna uitbreiden naar een desktop-versie.

</details>
Je website
<details open> <summary>uitwerken voor kick-off werkgroep</summary>
Je opdracht:

Ik maak een bestaande schoolwebsite na. Ik kies de homepage en één tweede pagina.
De originele website is van Basisschool De Achthoek: https://www.achthoek.nl

Screenshot(s) van de eerste pagina (small screen):

hier de naam van de pagina
<img src="images/miro-screen1.jpg" width="375px" alt="omschrijving van de pagina">

Screenshot(s) van de tweede pagina (small screen):

hier de naam van de pagina
<img src="images/miro-screen2.jpg" width="375px" alt="omschrijving van de pagina">

</details>
Toegankelijkheidstest 1/2 (week 1)
<details> <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>
Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen:

Toegankelijkheidstest 1/2 (week 1)
Screenreader-test (NVDA)

Ervaring:
Tijdens het testen met NVDA merkte ik dat de Achthoek-website moeilijk te begrijpen is voor een screenreader.

De screenreader leest alle teksten achter elkaar als platte tekst, zonder duidelijke structuur.

Een keuzemenu werd niet aangekondigd als “menu” maar gewoon als losse tekst.

Foto’s, zoals die bij de activiteitenkaarten, hadden geen alt-tekst en werden daardoor volledig genegeerd.

Het icoon van “commentaar” bij een activiteit werd niet benoemd.

De activiteitenkaarten (met titel, korte tekst, foto en icoon) waren visueel duidelijk, maar de screenreader zag dit niet als één geheel; hij las het gewoon als losse stukjes tekst.

Conclusie:
De site is visueel duidelijk, maar voor screenreader-gebruikers erg lastig te begrijpen. Dit laat zien hoe belangrijk semantische HTML, alt-teksten en duidelijke labels zijn.

Voorbeelden hoe ik dit in mijn eigen site wil oplossen:

Bij foto’s wil ik altijd een korte beschrijving toevoegen, zodat duidelijk wordt wat er op de foto te zien is.

Bij iconen, zoals een reactie-icoon, wil ik zorgen dat de functie wordt uitgesproken (bijvoorbeeld “geef een reactie”) of aangeven dat het puur decoratief is.

Kaarten (zoals activiteitenblokken) wil ik duidelijk structureren met een titel, tekst en eventuele knoppen die samen één geheel vormen, zodat de screenreader dit ook als groep kan voorlezen.

Bij menu’s en lijsten wil ik echte HTML-elementen gebruiken, zodat NVDA ze ook als menu of lijst aankondigt in plaats van losse tekst.

Alt-teksten toevoegen aan afbeeldingen:

<img src="activiteiten-foto.jpg" alt="Kinderen spelen buiten op het schoolplein">

Bevindingen

Ik kon niet direct naar de hoofdinhoud springen; er is geen skip-link.

Bij afbeeldingen hoorde ik geen beschrijvende alt-teksten.

Het contrast tussen tekst en achtergrond wil ik nog extra testen.

Contrast niet gecheckt Teksten op gekleurde achtergronden kunnen er visueel oké uitzien maar onvoldoende contrast hebben

<img src="readme-images/test-fed.jpg" width="375px" alt="breakdown van nog een dynamisch deel">
</details>
Breakdownschets (week 1)
<details> <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>
de hele pagina:
<img src="images/screen.homep.png" width="375px" alt="breakdown van de hele pagina">
dynamisch deel (bijv menu):
<img src="images/screen.2pag.png" width="375px" alt="breakdown van een dynamisch deel">

Voortgang 1 (week 2)
<details> <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>
Stand van zaken

Mijn code is tot nu toe netjes en semantisch, dit werd ook bevestigd tijdens de meeting.

Ik had een vraag of ik meerdere <nav>-elementen mag gebruiken → dit mag, bijvoorbeeld één in de header en één in de main.

Tip gekregen dat achtergrondfoto’s beter in CSS gezet kunnen worden en niet in HTML, omdat een screenreader ze niet hoeft te lezen.

Ik gebruikte <section> voor de activiteitenkaarten, maar kreeg de feedback dat <ul> en <li> logischer zijn omdat de kaarten echt een lijst vormen.

Agenda voor meeting
Ruba	Student 2	Student 3	Student 4
Check of mijn code semantisch correct is	Eigen punt invullen	Eigen punt invullen	Eigen punt invullen
Vraag over meerdere <nav> gebruiken	…	…	…
Feedback op gebruik van <section>	…	…	…
Verslag van meeting

Code is semantisch correct tot nu toe.

Het is prima om twee navigatie-elementen te gebruiken.

Achtergrondfoto’s beter via CSS doen i.p.v. HTML.

Voor de activiteitenkaarten liever <ul> en <li> gebruiken i.p.v. <section>.

</details>
Voortgang 2 (week 3)
<details> <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>
Vragen die ik wil stellen tijdens mijn voortgangsgesprek 2

De website die ik heb gekozen heeft een lastige vormgeving. Wat is tijdens de beoordeling belangrijker:

dat ik de vormgeving precies namaak zoals de echte website,

of dat ik vooral laat zien welk proces ik heb doorlopen en welke technieken ik heb geleerd?

De originele website bevat veel details, zoals hover-effecten en speciale fotospellen. Moet ik dat allemaal precies nadoen, ook al heb ik gekozen voor de focus responsive?

Mag ik de stijl aanpassen als ik denk dat het beter is voor de toegankelijkheid?

Wat is beter: de afbeeldingen uit de originele website downloaden en zelf gebruiken, of ze direct via een link insluiten?

Ik heb alleen het document Beoordelingsformulier Blok Web 2025/26 – Frontend Development gezien. Bestaat er ergens een uitgebreider overzicht met alle beoordelingscriteria?

</details>
Toegankelijkheidstest 2/2 (week 4)
<details open> <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>
Bevindingen

Tijdens de tweede toegankelijkheidstest heb ik mijn website getoetst aan de WCAG-richtlijnen.
De resultaten waren positief: bijna alle punten voldeden aan de eisen.

Wat goed ging:

De semantische HTML is sterk verbeterd: headings, navigatie, en alt-teksten zijn overal aanwezig.

Contrastwaarden tussen tekst en achtergrond zijn voldoende.

De site is goed bruikbaar via toetsenbord.

Dark/light mode werkt zonder problemen.

Niet van toepassing:

Er is geen audio, dus richtlijnen over ondertiteling en transcriptie zijn niet relevant.

Conclusie:
De website voldoet grotendeels aan de WCAG-normen. De verbeteringen sinds de eerste test hebben de toegankelijkheid en bruikbaarheid duidelijk verhoogd.

Screenshots van de testresultaten:
<img src="readme-images/2e-test (1).jpeg" width="375px" alt="WCAG-test overzicht 1"> <img src="readme-images/2e-test (2).jpeg" width="375px" alt="WCAG-test overzicht 2"> <img src="readme-images/2e-test (3).jpeg" width="375px" alt="WCAG-test overzicht 3"> <img src="readme-images/2e-test (4).jpeg" width="375px" alt="WCAG-test overzicht 4"> <img src="readme-images/2e-test (5).jpeg" width="375px" alt="WCAG-test overzicht 5"> </details>


Feedback eerste mondelinge gesprek
<details open> <summary>Week 3</summary>

Mijn website mocht qua details nog meer lijken op het origineel (zoals breedte van knoppen, lettertypes en achtergronden).

De hoofdnavigatie moest beter, vooral in de mobiele versie: gevraagd werd om een werkend mobiel menu.

In de code zaten ongeldige tekens (---) in commentaar waardoor validatie niet werkte.

Elke section/article moet een heading hebben.

Ik had nog geen eigen toegankelijkheidstest gedaan en moest de README aanvullen.

Ook moest ik kunnen laten zien dat de light/dark mode werkt.

Na dit gesprek heb ik:

De foutieve tekens verwijderd.

Headings toegevoegd aan sections.

Een werkend mobiel menu gemaakt.

De README verder ingevuld en de light/dark mode gedemonstreerd.

</details>
Feedbackgesprek 29 oktober
<details open> <summary>Week 5</summary>

Mijn code is valide en ziet er goed uit.

De website lijkt nu veel meer op de originele site.

Er is veel verbetering in structuur en layout.

Aandachtspunt: <h2> hoort binnen de juiste section.

Let op de volgorde van headings: niet van <h2> direct naar <h6> springen.

Na dit gesprek heb ik:

De headings herzien en verbeterd.

De structuur gecontroleerd zodat elke section een logische heading heeft.

</details>
Eindprocesverslag
<details open> <summary>Week 5</summary>

Tijdens het werken aan dit project heb ik veel geleerd over semantische HTML, responsief design en toegankelijkheid.

Wat goed ging:

Ik heb geleerd hoe ik een mobile-first layout opbouw en uitbreid naar desktop.

De site lijkt sterk op het origineel en de code is overzichtelijk.

Ik heb zelfstandig fouten opgespoord met de validator en opgelost.

De combinatie van light/dark mode en semantische opbouw maakt de site compleet.

Wat lastig was:

Het was uitdagend om alle details van de originele site precies na te maken.

Vooral het menu en de positionering vroegen veel tijd.

Het structureren van headings in een logische volgorde moest ik meerdere keren herzien.

Het was soms moeilijk om zelf een goede oplossing te vinden, omdat ik niet altijd duidelijke bronnen vond over wat semantisch precies betekent.
In het begin dacht ik dat semantisch coderen betekende: minder div en class gebruiken.
Later leerde ik van de docent dat het juist draait om de betekenis van elementen – dus waarom en wanneer je een bepaald element gebruikt.
Bijvoorbeeld: een <h2> gebruik je omdat het inhoudelijk de juiste structuur aangeeft, niet om de tekstgrootte.
Ook weet ik nu beter wanneer ik een id of class moet gebruiken.
Daarom heb ik mijn hele code opnieuw doorgenomen en selectors aangepast zodat ze beter passen bij de juiste semantische structuur.

Eindreflectie:
Ik zie een duidelijke groei: mijn website is technisch beter, visueel sterker en toegankelijker geworden. Ik begrijp nu hoe belangrijk het is dat HTML-structuur, CSS-layout en toegankelijkheid goed samenwerken.

</details>
Bronnenlijst
<details open> <summary>continu bijhouden terwijl je werkt</summary>

BrowserStack. (2025, 9 juni). Best practices for responsive web design: Tips to improve UX & performance. BrowserStack Blog. Geraadpleegd op 24 september 2025, van https://www.browserstack.com/guide/best-practice-responsive-design

Coding2GO. (z.d.). Learn CSS Flexbox in 20 minutes (course) [Video]. YouTube. https://www.youtube.com/watch?v=wsTv9y931o8

Mozilla Developer Network (MDN). (z.d.). background-image – CSS: Cascading Style Sheets | MDN. Mozilla. Geraadpleegd op 5 november 2025, van https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-image

OpenAI. (2025, 1 november). Uitleg over het gebruik van @import in CSS en hoe het toe te passen is [Large language model]. ChatGPT (GPT-5). https://chat.openai.com/

OpenAI. (2025, 5 november). Uitleg over het maken van een semantisch hamburger-menu in HTML, CSS en JavaScript [Large language model]. ChatGPT (GPT-5). https://chat.openai.com/

OpenAI. (2025, 29 oktober). Uitleg over mogelijke oorzaken van fouten bij het gebruik van het iframe-element in HTML [Large language model]. ChatGPT (GPT-5). https://chat.openai.com/

OpenAI. (2025, 29 oktober). Uitleg over het correcte gebruik van het iframe-element in HTML en de toegestane contexten [Large language model]. ChatGPT (GPT-5). https://chat.openai.com/

OpenAI. (2025, 29 oktober). Uitleg over het gebruik van iframe binnen een section-element volgens semantische HTML-principes [Large language model]. ChatGPT (GPT-5). https://chat.openai.com/

Trigo, A. (2025, 4 juni). 10+ hamburger menu examples [CSS only]. Geraadpleegd op 22 oktober 2025, van https://alvarotrigo.com/blog/hamburger-menu-css/

W3Schools. (z.d.). CSS Box-sizing. Geraadpleegd op 5 november 2025, van https://www.w3schools.com/css/css3_box-sizing.asp

W3Schools. (z.d.). CSS Flexbox. Geraadpleegd op 5 november 2025, van https://www.w3schools.com/css/css3_flexbox.asp

W3Schools. (z.d.). CSS Flexbox Responsive. Geraadpleegd op 5 november 2025, van https://www.w3schools.com/css/css3_flexbox_responsive.asp

YouTube. (z.d.). [Video over HTML & CSS – Hoe maak ik een dialog] [Video]. YouTube. https://www.youtube.com/watch?v=QoEeluqIQ8U

(Aan te vullen met exacte titel, kanaalnaam en publicatiedatum zodra bekend.)

YouTube. (z.d.). CSS Grid Course – The Only Grid Tutorial You’ll Ever Need! [Video]. YouTube. https://www.youtube.com/watch?v=JYfiaSKeYhE

YouTube. (z.d.). (Video title onbekend) [Video]. YouTube. https://www.youtube.com/watch?v=UzURcO1MnEU

</details>