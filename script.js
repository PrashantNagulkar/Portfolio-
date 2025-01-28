document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    document.querySelector('.menu-icon').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            document.querySelector('.nav-links').classList.remove('active'); // Close mobile menu
        });
    });

    // Typewriter effect
    const text = "Frontend Developer";
    let i = 0;
    setInterval(() => {
        if (i < text.length) {
            document.querySelector('.typewriter').textContent += text.charAt(i++);
        }
    }, 100);
});
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });