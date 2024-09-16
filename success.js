// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const categoryTitle = document.getElementById('categoryTitle');

if (category) {
    categoryTitle.textContent = category;
}

// Back to Categories button functionality
document.getElementById('backToCategoriesBtn').addEventListener('click', function() {
    window.location.href = 'categories.html';
});

// Logout button functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});
