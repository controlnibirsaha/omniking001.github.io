// Theme Switcher Logic
const switcher = document.getElementById('theme-switcher');
const body = document.body;

// Check localStorage for theme preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    switcher.textContent = '☀️';
}

switcher.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    switcher.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Contact Form Submission with Basic Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Message Sent Successfully!');
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
