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

    // Setting up javascript for menu and search-bar
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

        // Show search input when search-icon is clicked
        searchIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent this click from triggering the page click event
            headerSearch.classList.toggle('active');
        });

        // Hide search input when clicking anywhere else on the page
        document.addEventListener('click', (e) => {
            // Check if the click is outside the header-search container
            if (!headerSearch.contains(e.target)) {
                headerSearch.classList.remove('active');
            }
        });

    document.querySelectorAll('.accordion-h2').forEach((accordion) => {
            accordion.addEventListener('click', function () {
                // Toggle the active class on the accordion header
                this.classList.toggle('active');

                // Select the corresponding accordion-text and toggle its display
                let accordionText = this.nextElementSibling;
                if (accordionText.style.display === 'block') {
                    accordionText.style.display = 'none';
                } else {
                    accordionText.style.display = 'block';
                }
            });
        });
