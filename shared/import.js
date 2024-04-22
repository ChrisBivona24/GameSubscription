// Function to import header
function importHeader() {
    const headerContainer = document.getElementById('header-container');
    const headerPath = '../shared/header.html'; // Relative path to header.html in the shared directory
    fetch(headerPath)
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        });
}

// Function to import footer
function importFooter() {
    const footerContainer = document.getElementById('footer-container');
    const footerPath = '../shared/footer.html'; // Relative path to footer.html in the shared directory
    fetch(footerPath)
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        });
}

// Call functions to import header and footer when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    importHeader();
    importFooter();
});