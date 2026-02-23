document.addEventListener('DOMContentLoaded', () => {

    /* ─────────────────────────────────────────
       1. SCROLL PROGRESS BAR
    ───────────────────────────────────────── */
    const progressBar = document.querySelector('.fixed.top-0.left-0');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + '%';
    });

    /* ─────────────────────────────────────────
       2. SMOOTH SCROLL HELPER
    ───────────────────────────────────────── */
    function scrollToSection(sectionId) {
        const el = document.getElementById(sectionId);
        if (!el) return;
        const headerOffset = 90; // fixed header height + top spacing
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    /* ─────────────────────────────────────────
       3. NAVIGATION BAR – smooth scroll + active state
    ───────────────────────────────────────── */
    // Map nav button text → section id
    const navMap = {
        'home': 'hero',
        'about': 'about',
        'academics': 'academics',
        'leadership': 'leadership',
        'faculty': 'faculty',
        'gallery': 'gallery',
        'reviews': 'reviews',
        'contact': 'contact'
    };

    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.textContent.toLowerCase().trim();
            const target = navMap[key];
            if (target) scrollToSection(target);
        });
    });

    // Highlight active nav button on scroll
    const sectionIds = Object.values(navMap);
    window.addEventListener('scroll', () => {
        let current = '';
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (!section) return;
            if (window.pageYOffset >= section.offsetTop - 120) current = id;
        });
        navButtons.forEach(btn => {
            const key = btn.textContent.toLowerCase().trim();
            const matches = navMap[key] === current;
            btn.classList.toggle('text-blue-600', matches);
            btn.classList.toggle('text-gray-600', !matches);
        });
    });

    /* ─────────────────────────────────────────
       4. ACTION BUTTONS – scroll to target sections
    ───────────────────────────────────────── */
    // "Apply Now" (header) → admissions section
    document.getElementById('btn-apply-now')?.addEventListener('click', () => {
        scrollToSection('admissions');
    });

    // "Start Admission" (hero) → admissions section
    document.getElementById('btn-start-admission')?.addEventListener('click', () => {
        scrollToSection('admissions');
    });

    // "Learn More" (hero) → about section
    document.getElementById('btn-learn-more')?.addEventListener('click', () => {
        scrollToSection('about');
    });

    // "Learn About Our Programs" (Oxford banner) → academics section
    document.getElementById('btn-learn-programs')?.addEventListener('click', () => {
        scrollToSection('academics');
    });

    // "Contact Admissions" (admissions card) → contact section
    document.getElementById('btn-contact-admissions')?.addEventListener('click', () => {
        scrollToSection('contact');
    });

    /* ─────────────────────────────────────────
       5. REVIEWS SECTION – animated card reveal on scroll
    ───────────────────────────────────────── */
    const reviewSection = document.getElementById('reviews') || document.getElementById('alumni');
    const reviewCards = reviewSection ? reviewSection.querySelectorAll('.rounded-xl') : [];
    const reviewObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger the three cards
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 150);
                reviewObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reviewCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        reviewObserver.observe(card);
    });

    /* ─────────────────────────────────────────
       6. SECTION REVEAL ANIMATIONS (general)
    ───────────────────────────────────────── */
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('section').forEach(sec => {
        sec.classList.add('reveal');
        sectionObserver.observe(sec);
    });


});

