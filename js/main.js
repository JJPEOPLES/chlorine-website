// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (for smaller screens)
document.addEventListener('DOMContentLoaded', function() {
    // This would be implemented if we had a mobile menu button
    // For now, we're using a responsive design that doesn't require a toggle
});

// Update download information dynamically
// This would typically fetch from an API or be updated during build
document.addEventListener('DOMContentLoaded', function() {
    // Example of how you might update this information dynamically
    // In a real implementation, this would come from your build system
    
    // const downloadInfo = {
    //     version: '1.0',
    //     releaseDate: 'May 30, 2025',
    //     checksum: 'a1b2c3d4e5f6...',
    //     size: '2.1 GB'
    // };
    
    // const versionElements = document.querySelectorAll('.version');
    // const dateElements = document.querySelectorAll('.release-date');
    // const checksumElements = document.querySelectorAll('.checksum');
    // const sizeElements = document.querySelectorAll('.size');
    
    // versionElements.forEach(el => el.textContent = downloadInfo.version);
    // dateElements.forEach(el => el.textContent = downloadInfo.releaseDate);
    // checksumElements.forEach(el => el.textContent = downloadInfo.checksum);
    // sizeElements.forEach(el => el.textContent = downloadInfo.size);
});

// Highlight the current section in the navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});