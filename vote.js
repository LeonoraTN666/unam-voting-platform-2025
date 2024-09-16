const category = new URLSearchParams(window.location.search).get('category');
document.getElementById('categoryName').textContent = category;

const categories = {
    "President": "presidentCandidates",
    "Vice President": "vicePresidentCandidates",
    "Secretary": "secretaryCandidates"
};

document.querySelectorAll('.category-section').forEach(section => {
    section.style.display = 'none';
});

const categorySectionId = categories[category];
if (categorySectionId) {
    document.getElementById(categorySectionId).style.display = 'block';
}

// Handle vote submission
document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
        alert(`You voted for ${selectedCandidate.value}`);
        window.location.href = 'success.html';
    } else {
        alert('Please select a candidate.');
    }
});

// Back to categories
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'categories.html';
});
