// vote.js

const category = new URLSearchParams(window.location.search).get('category');
document.getElementById('category-title').textContent = `Vote for ${category.replace('-', ' ')}`;

const candidates = {
    'vice-president': [
        { name: 'Anna de Kler', img: 'anna.jpg' },
        { name: 'Hether Leo', img: 'hether.jpg' },
        { name: 'Kia Noel', img: 'kia.jpg' },
        { name: 'Jasmine Makeba', img: 'jasmine.jpg' }
    ],
    'secretary': [
        { name: 'John Shiweda', img: 'john.jpg' },
        { name: 'Leon Kent', img: 'leon.jpg' },
        { name: 'Love Dehate', img: 'love.jpg' }
    ],
    'finance-manager': [
        { name: 'Brian N', img: 'brian.jpg' },
        { name: 'Catherine T', img: 'catherine.jpg' },
        { name: 'David Z', img: 'david.jpg' }
    ],
    'academic-affairs-coordinator': [
        { name: 'Linda Mupenzi', img: 'linda.jpg' },
        { name: 'Robert Uirab', img: 'robert.jpg' },
        { name: 'Faith Tjombe', img: 'faith.jpg' }
    ],
    'sport-recreation-officer': [
        { name: 'Elton Joseph', img: 'elton.jpg' },
        { name: 'Nina Sisa', img: 'nina.jpg' },
        { name: 'Timothy Ndume', img: 'timothy.jpg' }
    ],
    'social-cultural-coordinator': [
        { name: 'Peter Nande', img: 'peter.jpg' },
        { name: 'Maria Jesaya', img: 'maria.jpg' },
        { name: 'Dina Amutenya', img: 'dina.jpg' }
    ],
    'public-relations-officer': [
        { name: 'Grace Muha', img: 'grace.jpg' },
        { name: 'Samuel Nghilundwa', img: 'samuel.jpg' },
        { name: 'Elena Kapuka', img: 'elena.jpg' }
    ]
};

function generateCandidates() {
    const candidatesDiv = document.querySelector('.candidates');
    candidates[category].forEach((candidate, index) => {
        const div = document.createElement('div');
        div.classList.add('candidate');
        div.innerHTML = `
            <img src="${candidate.img}" alt="${candidate.name}">
            <p>${candidate.name}</p>
            <input type="radio" name="candidate" id="candidate-${index}" value="${candidate.name}">
            <label for="candidate-${index}">Select ${candidate.name}</label>
        `;
        candidatesDiv.appendChild(div);
    });
}

generateCandidates();

// Submit button functionality
document.getElementById('submit-vote').addEventListener('click', function () {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
        alert(`Vote submitted for ${selectedCandidate.value}!`);
        window.location.href = 'categories.html';
    } else {
        alert('Please select a candidate before submitting your vote.');
    }
});

// Back button functionality
document.getElementById('go-back').addEventListener('click', function () {
    window.location.href = 'categories.html';
});
