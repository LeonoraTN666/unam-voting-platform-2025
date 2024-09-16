// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const categoryName = document.getElementById('categoryName');

if (category) {
    categoryName.textContent = category;
}

// Handle form submission
document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

    if (selectedCandidate) {
        localStorage.setItem('votedCategory', category);
        localStorage.setItem('votedCandidate', selectedCandidate.value);
        window.location.href = 'success.html?category=' + encodeURIComponent(category);
    } else {
        alert('Please select a candidate.');
    }
});

// Back button functionality
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'categories.html';
});
