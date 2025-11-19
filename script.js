// Bird Data with Morphology Information
const birdsData = [
    {
        name: "Sikatan cacing",
        scientific: "Cyornis banyumas",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/347968411/1800?w=400&h=300&fit=crop",
        description: "Burung pemakan serangga berukuran sedang yang umum dijumpai di habitat berhutan. Bagian atas tubuh jantan didominasi warna biru, sedangkan betina cenderung coklat.",
        morphology: {
            ukuran: "Sekitar 15 cm, tergolong berukuran sedang.",
            paruh: "Paruh hitam, pendek dan ramping, sesuai adaptasi menangkap serangga secara cepat.",
            sayap: "Sayap proporsional; jantan berwarna biru pada bagian atas, betina coklat lebih kusam.",
            ekor: "Ekor sedang dengan warna mengikuti tubuh bagian atas, tanpa kilau mencolok.",
            jantan: "Bagian atas biru tua dengan dahi dan alis biru muda; wajah bercorak hitam; tenggorokan hingga sisi tubuh jingga dan perut putih; memiliki bintik dagu hitam serta tunggir tidak mengilap.",
            betina: "Tubuh bagian atas coklat dengan lingkar mata kuning tua; bagian bawah serupa jantan tetapi lebih pucat."
        },
        sound: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/641432098/mp3"
    },

    {
        name: "Cekakak Jawa",
        scientific: "Halcyon cyanoventris",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/272493351/1200?w=400&h=300&fit=crop",
        description: "Cekakak burung raja udang yang memiliki tubuh berwarna hitam gelap dengan caput (Kepala) coklat gelap dan Cervix (Leher) coklat. Perut dan punggungnya biru ungu, penutup sayap hitam, bulu terbang biru terang. Bercak putih pada sayap terlihat sewaktu terbang. Remaja: tenggorokan keputih-putihan.",
        morphology: {
            ukuran: "Berukuran sedang (25 cm)",
            paruh: "Besar, lurus, tebal, dan merah tua",
            sayap: "Lebar dan membulat",
            warna: "Kepala colat, punggung dan sayap biru tua, perut biru terang, sayap bercampur hitam-kebiruan",
            jantan: "tidak terdapat dimorfirsme pada jantan dan betina",
            betina: "tidak terdapat dimorfirsme pada jantan dan betina"
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
        name: "Elang Ular Bido",
        scientific: "Spilornis cheela",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/85869891/900?w=400&h=300&fit=crop",
        description: "Merupakan burung pemangsan yang paling berisik dengan suara yang melengking dan biasanya selalu bersuara saat terbang.",
        morphology: {
            ukuran: "Besar (55-70 cm)",
            paruh: "Melengkung kuat, paruh raptor; cire kuning.",
            sayap: "Lebar dan sangat membulat (tipe soaring/gliding).",
            Warna: "Coklat gelap, dada bergaris; kepala hitam-abu dengan jambul pendek; bintik putih di sayap.",
            Jantan: "Lebih kecil dari betina",
            betina: "Lebih besar dari jantan"
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
        name: "Burung-Madu Jawa",
        scientific: "Cinnyris jugularis",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/275821371/640?w=400&h=300&fit=crop",
        description: "Burung endemik ini merupakan salah satu pollinator alam atau hewan yang memiliki peran penyerbukan bunga di Pulau Jawa.",
        morphology: {
            ukuran: "Kecil (10-11 cm).",
            paruh: "Panjang, tipis, melengkung (pemakan nektar).",
            sayap: "Kecil, runcing (tipe terbang cepat & hover pendek).",
            warna: "Bawah kuning cerah; atas zaitun.",
            jantan: "Dada kuning; tenggorokan hitam metalik dengan kilau ungu",
            betina: "Warna lebih kusam; tenggorokan abu-abu; tanpa kilau metalik."
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
        name: "Pelanduk Semak",
        scientific: "Malacocincla sepiaria",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/224276501/900?w=400&h=300&fit=crop",
        description: "Burung yang cerdas dan mudah dijinakkan. Sering dipelihara karena kemampuannya menirukan suara.",
        morphology: {
            ukuran: "Kecil-sedang (15-17 cm).",
            paruh: "Sedang, agak tipis, sedikit melengkung",
            sayap: "Pendek dan membulat, tipe terrestrial skulker (lebih banyak berjalan di semak).",
            warna: "Coklat zaitun, dada lebih pucat, garis alis putih krem.",
            jantan: "Mirip betina",
            betina: "Mirip Jantan"
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
        name: "Pelanduk Topi Hitam",
        scientific: "Pellorneum capistratum",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/608852873/900?w=400&h=300&fit=crop",
        description: "Burung yang cerdas dan mudah dijinakkan. Sering dipelihara karena kemampuannya menirukan suara.",
        morphology: {
            ukuran: "Kecil (13-14 cm).",
            paruh: "Pendek-tipis, sedikit melengkung",
            sayap: "Pendek, membulat, adaptasi untuk gerakan cepat dalam semak.",
            warna: "Kepala dengan “topi” hitam pekat, tubuh coklat-keabu, dada lebih pucat.",
            jantan: "sama dengan betina",
            betina: "sama dengan Jantan"
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
        name: "Pelanduk Topi Hitam",
        scientific: "Pellorneum capistratum",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/608852873/900?w=400&h=300&fit=crop",
        description: "Burung yang cerdas dan mudah dijinakkan. Sering dipelihara karena kemampuannya menirukan suara.",
        morphology: {
            ukuran: "Kecil (13-14 cm).",
            paruh: "Pendek-tipis, sedikit melengkung",
            sayap: "Pendek, membulat, adaptasi untuk gerakan cepat dalam semak.",
            warna: "Kepala dengan “topi” hitam pekat, tubuh coklat-keabu, dada lebih pucat.",
            jantan: "sama dengan betina",
            betina: "sama dengan Jantan"
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
        name: "Pelanduk Topi Hitam",
        scientific: "Pellorneum capistratum",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/608852873/900?w=400&h=300&fit=crop",
        description: "Burung yang cerdas dan mudah dijinakkan. Sering dipelihara karena kemampuannya menirukan suara.",
        morphology: {
            ukuran: "Kecil (13-14 cm).",
            paruh: "Pendek-tipis, sedikit melengkung",
            sayap: "Pendek, membulat, adaptasi untuk gerakan cepat dalam semak.",
            warna: "Kepala dengan “topi” hitam pekat, tubuh coklat-keabu, dada lebih pucat.",
            jantan: "sama dengan betina",
            betina: "sama dengan Jantan"
        },
        sound: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
];

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggle();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    setupToggle() {
        const toggleButton = document.getElementById('themeToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Bird Card Generator
class BirdCardGenerator {
    constructor() {
        this.currentPlayingAudio = null;
        this.birdCards = [];
        this.generateCards();
    }

    generateCards() {
        const birdsGrid = document.getElementById('birdsGrid');
        if (!birdsGrid) return;

        birdsGrid.innerHTML = '';
        this.birdCards = [];

        birdsData.forEach((bird, index) => {
            const card = this.createBirdCard(bird, index);
            birdsGrid.appendChild(card);
            this.birdCards.push(card);
        });

        // Dispatch event when cards are generated
        window.dispatchEvent(new CustomEvent('birdCardsGenerated', { 
            detail: { cards: this.birdCards } 
        }));
    }

    getBirdCards() {
        return this.birdCards;
    }

    createBirdCard(bird, index) {
        const card = document.createElement('div');
        card.className = 'bird-card glass-card';

        const morphologyItems = Object.entries(bird.morphology)
            .map(([key, value]) => `<li><strong>${this.capitalizeFirst(key)}:</strong> ${value}</li>`)
            .join('');

        card.innerHTML = `
            <img src="${bird.image}" alt="${bird.name}" class="bird-image" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(bird.name)}'">
            <h3 class="bird-name">${bird.name}</h3>
            <p class="bird-scientific">${bird.scientific}</p>
            <p class="bird-description">${bird.description}</p>
            <details class="morphology-dropdown">
                <summary class="morphology-summary" aria-label="Buka detail morfologi">Morfologi burung</summary>
                <ul class="morphology-list">
                    ${morphologyItems}
                </ul>
            </details>
            <button class="sound-button" data-bird-index="${index}" aria-label="Putar suara ${bird.name}">
                <span class="sound-icon">🔊</span>
                <span>Putar Suara</span>
            </button>
        `;

        // Add sound button event listener
        const soundButton = card.querySelector('.sound-button');
        soundButton.addEventListener('click', () => this.handleSoundPlay(index));

        return card;
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    handleSoundPlay(birdIndex) {
        const bird = birdsData[birdIndex];
        const soundButton = document.querySelector(`[data-bird-index="${birdIndex}"]`);

        // Stop current playing audio if any
        if (this.currentPlayingAudio) {
            this.currentPlayingAudio.pause();
            this.currentPlayingAudio.currentTime = 0;
            const previousButton = document.querySelector('.sound-button.playing');
            if (previousButton) {
                previousButton.classList.remove('playing');
                previousButton.querySelector('.sound-icon').textContent = '🔊';
            }
        }

        // If clicking the same button, just stop
        if (soundButton.classList.contains('playing')) {
            soundButton.classList.remove('playing');
            soundButton.querySelector('.sound-icon').textContent = '🔊';
            this.currentPlayingAudio = null;
            return;
        }

        // Play new audio
        try {
            const audio = new Audio(bird.sound);
            
            // Handle audio events
            audio.addEventListener('play', () => {
                soundButton.classList.add('playing');
                soundButton.querySelector('.sound-icon').textContent = '⏸️';
            });

            audio.addEventListener('ended', () => {
                soundButton.classList.remove('playing');
                soundButton.querySelector('.sound-icon').textContent = '🔊';
                this.currentPlayingAudio = null;
            });

            audio.addEventListener('error', (e) => {
                console.error('Error playing audio:', e);
                // Fallback: Use Web Audio API to generate a simple tone
                this.playFallbackSound(soundButton);
            });

            this.currentPlayingAudio = audio;
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
                // Fallback sound
                this.playFallbackSound(soundButton);
            });
        } catch (error) {
            console.error('Error creating audio:', error);
            this.playFallbackSound(soundButton);
        }
    }

    playFallbackSound(button) {
        // Create a simple beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);

            button.classList.add('playing');
            button.querySelector('.sound-icon').textContent = '⏸️';

            setTimeout(() => {
                button.classList.remove('playing');
                button.querySelector('.sound-icon').textContent = '🔊';
            }, 500);
        } catch (error) {
            console.error('Error creating fallback sound:', error);
            // Show a message to user
            button.textContent = 'Suara tidak tersedia';
            setTimeout(() => {
                button.innerHTML = '<span class="sound-icon">🔊</span><span>Putar Suara</span>';
            }, 2000);
        }
    }
}

// Search Manager
class SearchManager {
    constructor(birdCardGenerator) {
        this.searchInput = document.getElementById('morphologySearch');
        this.searchClear = document.getElementById('searchClear');
        this.birdsGrid = document.getElementById('birdsGrid');
        this.noResults = document.getElementById('noResults');
        this.birdCardGenerator = birdCardGenerator;
        this.birdCards = [];
        this.init();
    }

    init() {
        if (!this.searchInput) return;

        // Get bird cards from generator or DOM
        this.updateBirdCards();

        // Listen for card generation event
        window.addEventListener('birdCardsGenerated', (e) => {
            this.birdCards = e.detail.cards;
        });

        // Search input event
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Clear button event
        if (this.searchClear) {
            this.searchClear.addEventListener('click', () => {
                this.clearSearch();
            });
        }

        // Show/hide clear button
        this.searchInput.addEventListener('input', () => {
            if (this.searchClear) {
                this.searchClear.style.display = this.searchInput.value.length > 0 ? 'flex' : 'none';
            }
        });
    }

    updateBirdCards() {
        if (this.birdCardGenerator && this.birdCardGenerator.getBirdCards) {
            this.birdCards = this.birdCardGenerator.getBirdCards();
        } else {
            this.birdCards = Array.from(document.querySelectorAll('.bird-card'));
        }
    }

    handleSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        
        // Update bird cards if needed
        if (!this.birdCards || this.birdCards.length === 0) {
            this.updateBirdCards();
        }

        if (searchTerm === '') {
            this.showAllCards();
            return;
        }

        let hasResults = false;

        this.birdCards.forEach((card, index) => {
            const bird = birdsData[index];
            if (!bird) return;

            // Search in morphology data
            const morphologyText = Object.entries(bird.morphology)
                .map(([key, value]) => `${key} ${value}`)
                .join(' ')
                .toLowerCase();

            // Also search in name, scientific name, and description
            const searchableText = `
                ${bird.name} 
                ${bird.scientific} 
                ${bird.description} 
                ${morphologyText}
            `.toLowerCase();

            const matches = searchableText.includes(searchTerm);

            if (matches) {
                card.classList.remove('hidden');
                hasResults = true;
            } else {
                card.classList.add('hidden');
            }
        });

        // Show/hide no results message
        if (this.noResults) {
            this.noResults.style.display = hasResults ? 'none' : 'block';
        }

        if (this.birdsGrid) {
            this.birdsGrid.style.display = hasResults ? 'flex' : 'none';
        }
    }

    showAllCards() {
        this.birdCards.forEach(card => {
            card.classList.remove('hidden');
        });

        if (this.noResults) {
            this.noResults.style.display = 'none';
        }

        if (this.birdsGrid) {
            this.birdsGrid.style.display = 'flex';
        }
    }

    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
            this.searchInput.focus();
            this.handleSearch('');
        }

        if (this.searchClear) {
            this.searchClear.style.display = 'none';
        }
    }
}

// Smooth Scroll Animation
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }

    init() {
        // Logo click to scroll to home
        const navLogo = document.querySelector('.nav-logo');
        if (navLogo) {
            navLogo.addEventListener('click', () => {
                const homeSection = document.querySelector('#home');
                if (homeSection) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    if (this.navMenu && this.navMenu.classList.contains('active')) {
                        this.toggleMobileMenu();
                    }
                }
            });
        }

        // Smooth scroll for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (this.navMenu && this.navMenu.classList.contains('active')) {
                        this.toggleMobileMenu();
                    }
                }
            });
        });

        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && 
                this.navMenu.classList.contains('active') &&
                !this.navMenu.contains(e.target) &&
                !this.navToggle.contains(e.target)) {
                this.toggleMobileMenu();
            }
        });

        // Update active state on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveSection();
        });

        // Initial active state
        this.updateActiveSection();
    }

    toggleMobileMenu() {
        if (this.navMenu && this.navToggle) {
            this.navMenu.classList.toggle('active');
            this.navToggle.classList.toggle('active');
        }
    }

    updateActiveSection() {
        const scrollPosition = window.scrollY + 150;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Handle top of page
        if (window.scrollY < 100) {
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === 'home') {
                    link.classList.add('active');
                }
            });
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme Manager
    new ThemeManager();

    // Initialize Navigation Manager
    new NavigationManager();

    // Initialize Bird Cards
    const birdCardGenerator = new BirdCardGenerator();

    // Initialize Search Manager
    new SearchManager(birdCardGenerator);

    // Initialize Scroll Animations
    initScrollAnimations();

    // Add loading state removal
    document.body.classList.remove('loading');
});

// Handle page visibility to pause audio when tab is hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.currentPlayingAudio) {
        window.currentPlayingAudio.pause();
    }
});

