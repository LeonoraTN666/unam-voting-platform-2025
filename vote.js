document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const categoryNameElement = document.getElementById('categoryName');
    const candidatesContainer = document.getElementById('candidatesContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Set the category name in the header
    categoryNameElement.textContent = category;

    // Sample candidates data for each category
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
        Finance: [
            { name: "Peter Nambahu", img: "finance1.jpg" },
            { name: "Mary Nkuna", img: "finance2.jpg" },
            { name: "Elijah Shikongo", img: "finance3.jpg" }
        ],
        AcademicAffairs: [
            { name: "Hannah Tjivinda", img: "academic1.jpg" },
            { name: "Samuel Ndapanda", img: "academic2.jpg" },
            { name: "Linda Haufiku", img: "academic3.jpg" }
        ],
        SportAndRecreation: [
            { name: "Paul Katjivena", img: "sport1.jpg" },
            { name: "Esther Nambahu", img: "sport2.jpg" },
            { name: "Hendrik Shikongo", img: "sport3.jpg" }
        ],
        SocialAndCultural: [
            { name: "Grace Shivute", img: "social1.jpg" },
            { name: "Robert Shiweda", img: "social2.jpg" },
            { name: "Elena Nakale", img: "social3.jpg" }
        ],
        PublicRelations: [
            { name: "Charles Immanuel", img: "pr1.jpg" },
            { name: "Debbie Muinjo", img: "pr2.jpg" },
            { name: "Erastus Haufiku", img: "pr3.jpg" }
        ]
    };

    // Clear any existing candidates
    candidatesContainer.innerHTML = '';

    // Load candidates based on the selected category
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
            // Redirect to success page with category
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
