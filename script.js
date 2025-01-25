
// script.js

// Function to load content dynamically into the main-content area
function loadPage(page) {
    // Fetch the content from the appropriate HTML file
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            // Load the content into the main-content div
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
        });
}

// Add event listeners to menu links to load content dynamically
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default link behavior
        const page = this.getAttribute('data-page');  // Get the page name from data attribute
        loadPage(page);  // Load the corresponding page
    });
});

// Load default content (e.g., About) when the page first loads
window.onload = () => {
    loadPage('about');  // Load 'about.html' by default
};
