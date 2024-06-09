// Preload images
const preloadImages = () => {
    for (let i = 0; i < 11; i++) {
        const img = new Image();
        img.src = `images/${i}.png`;
    }
};

preloadImages();

// Function to determine the icon based on score progress
function getIconForScore(score) {
    const checkpoint = Math.ceil(score / 10.0);
    return `images/${checkpoint}.png`;
}

// Function to update scores and icons dynamically
function updateScores() {
    // Fetch new scores from a server or update manually
    const scores = [
        { name: "Tim", score: 40 },
        { name: "Boris3 (Mo)", score: 10 },
        { name: "GOOCH (Sri)", score: 20 },
        { name: "Maggie", score: 20 },
        { name: "Jack", score: 0 }
    ];

    // Sort scores in descending order based on score
    scores.sort((a, b) => b.score - a.score);

    const playersContainer = document.querySelector('.players');
    playersContainer.innerHTML = ''; // Clear existing players

    // Iterate through sorted scores to update HTML
    scores.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.classList.add('player');
        playerElement.innerHTML = `
            <div class="name">${player.name}</div>
            <div class="score-bar"><div class="bar" style="width: ${player.score}%;"></div></div>
            <div class="icon"><img src="${getIconForScore(player.score)}" alt="Progress Icon"></div>
        `;
        playersContainer.appendChild(playerElement);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateScores();
});
