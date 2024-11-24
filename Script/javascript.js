document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".activity-section");

    const sectionOneOptions = { rootMargin: "-100px 0px 0px 0px"};

    const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    }, sectionOneOptions);  

    sectionOneObserver.observe(sectionOne);
});
let slideIndex = 1;

// Sikrer at den første sliden er synlig når siden laster
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; // Sikrer at nåværende slide er synlig
    dots[slideIndex - 1].className += " active"; // Fremhever tilsvarende dot
}

function toggleTeams() {
    const moreTeams = document.getElementById("moreTeams");
    const toggleBtn = document.getElementById("toggleBtn");

    if (moreTeams.style.display === "none" || moreTeams.style.display === "") {
        moreTeams.style.display = "flex"; // Vis ytterlig teams
        toggleBtn.innerHTML = "<p>Show Less Teams</p>";
    } else {
        moreTeams.style.display = "none"; // Skjul ytterlige teams
        toggleBtn.innerHTML = "<p>Show More Teams</p>";
    }
}


function toggleExtraCards() {
    const extraCards = document.querySelectorAll('.OtherStudies-container .OtherStudies-column:nth-child(n+4)');
    const btn = document.querySelector('.show-more-btn');

    // Sjekk om de ekstra kortene er synlige eller skjulte
    let areHidden = extraCards[0].style.display === 'none' || extraCards[0].style.display === '';

    // Veksle synlighet
    extraCards.forEach(card => {
        card.style.display = areHidden ? 'block' : 'none';
    });

    // Oppdater knappetekst basert på synligheten
    btn.innerText = areHidden ? 'Vis færre' : 'Vis flere';

    // Sørg for at knappen forblir i fokus
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

    // Javascript for meny of search-bar
        const hamburger = document.querySelector('.hamburger');
        const closeIcon = document.querySelector('.close');
        const fullMenu = document.getElementById('fullMenu');

        hamburger.addEventListener('click', () => {
            hamburger.style.display = 'none';
            closeIcon.style.display = 'block';
            fullMenu.classList.add('show');
        });

        closeIcon.addEventListener('click', () => {
            hamburger.style.display = 'block';
            closeIcon.style.display = 'none';
            fullMenu.classList.remove('show');
        });

        const searchIcon = document.querySelector('.header-search .search-icon');
        const headerSearch = document.querySelector('.header-search');
        const searchInput = document.querySelector(
            '.header-search .search-input'
        );

        // Viser search input når search-ikon blir klikket
        searchIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Forhindrer dette klikket i å utløse page click event
            headerSearch.classList.toggle('active');
        });

        // Gjemmer søke input når man klikker et annet sted på siden
        document.addEventListener('click', (e) => {
            // Sjekker om klikket skjer utenfor header-search containeren
            if (!headerSearch.contains(e.target)) {
                headerSearch.classList.remove('active');
            }
        });

        document.querySelectorAll('.accordion-h2').forEach((accordion) => {
            accordion.addEventListener('click', function () {
                // Skrur på den aktive klassen i accordion header
                
        
                // Velger tilsvarende accordion-text og skrur på displayet
                let accordionText = this.nextElementSibling;
                if (accordionText.style.display === 'block') {
                    accordionText.style.display = 'none';
                } else {
                    accordionText.style.display = 'block';
                }
            });
        });
        
