document.addEventListener('DOMContentLoaded', () => {
    // Date update
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- TYPING EFFECT LOGIC ---
    const textToType = "Hello, I am Firas Ayari";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            // Randomize typing speed slightly for realism (50ms to 150ms)
            const randomDelay = Math.random() * 100 + 50; 
            setTimeout(typeWriter, randomDelay);
        } else {
            // Optional: Remove cursor blinking class after done, or keep it
            // document.querySelector('.cursor').style.display = 'none';
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // --- EXISTING FUNCTIONALITY ---

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animation
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .section-title, .hero-image-container');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(styleSheet);

    // Navbar Hide/Show
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) { 
            navbar.style.transform = "translateY(-100%)"; 
        } else { 
            navbar.style.transform = "translateY(0)"; 
        }
        navbar.style.transition = "transform 0.3s ease-in-out";
        lastScrollTop = scrollTop;
    });
});