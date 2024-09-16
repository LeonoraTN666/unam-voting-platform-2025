document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const categoryNameElement = document.getElementById('categoryName');
    const candidatesContainer = document.getElementById('candidatesContainer');
    const errorMessage = document.getElementById('errorMessage');

    categoryNameElement.textContent = category;

    // Sample candidates data
    const candidates = {
        President: [
            { name: "John Kambwa", img: "president1.jpg" },
            { name: "Leonora Nashipeta", img: "president2.jpg" },
            { name: "Victor Sheefeni", img: "president3.jpg" }
        ],
        VicePresident: [
            { name: "Anna Nepolo", img: "vp1.jpg" },
            { name: "Matthew Hishoono", img: "vp2.jpg" },
            { name: "Martha Muheua", img: "vp3.jpg" }
        ],
        Secretary: [
            { name: "Samuel Amupolo", img: "secretary1.jpg" },
            { name: "Janet Kavihuha", img: "secretary2.jpg" },
            { name: "David Nangolo", img: "secretary3.jpg" }
        ],
        // Add other categories here
    };

    // Load candidates based on selected category
    if (candidates[category]) {
        candidates[category].forEach(candidate => {
            const candidateDiv = document.createElement('div');
            candidateDiv.className = 'candidate';
            candidateDiv.innerHTML = `
                <img src="${candidate.img}" alt="${candidate.name}" class="candidate-image">
                <label>
                    <input type="radio" name="candidate" value="${candidate.name}">
                    ${candidate.name}
                </label>
            `;
            candidatesContainer.appendChild(candidateDiv);
        });
    } else {
        candidatesContainer.innerHTML = `<p>No candidates available for ${category}.</p>`;
    }

    // Handle form submission
    document.getElementById('voteForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
        
        if (!selectedCandidate) {
            errorMessage.textContent = "Please select a candidate.";
            return;
        }

        // Confirm submission
        if (confirm(`Are you sure you want to vote for ${selectedCandidate.value}?`)) {
            // Handle successful vote (e.g., save vote and redirect)
            window.location.href = 'success.html?category=' + encodeURIComponent(category);
        } else {
            errorMessage.textContent = "Vote cancelled.";
        }
    });

    // Back button functionality
    document.getElementById('backBtn').addEventListener('click', function() {
        window.location.href = 'categories.html';
    });
});
