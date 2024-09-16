document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    document.getElementById('categoryTitle').textContent = category;

    // Handle back to categories and logout button
    document.getElementById('backToCategoriesBtn').addEventListener('click', function() {
        window.location.href = 'categories.html';
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });
});
