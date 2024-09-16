// vote.js

// Retrieve the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Display the selected category title
document.getElementById('categoryTitle').textContent = category;

// Handle vote submission
document.getElementById('submitVoteBtn').addEventListener('click', function() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    
    if (selectedCandidate) {
        alert(`You voted for ${selectedCandidate.value} in the ${category} category.`);
        window.location.href = 'success.html
