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
    const scores = {
        player1: 40,
        player2: 10,
        player3: 20,
        player4: 20,
        player5: 0
    };

    // Convert scores object to an array of objects for sorting
    const scoresArray = Object.entries(scores).map(([player, score]) => ({ player, score }));

    // Sort scores in descending order based on score
    scoresArray.sort((a, b) => b.score - a.score);

    // Iterate over sorted scores to update dynamically
    scoresArray.forEach(({ player, score }) => {
        const bar = document.querySelector(`#${player} .bar`);
        const newWidth = `${score}%`;
        if (bar.style.width !== newWidth) {
            bar.style.width = newWidth;
        }

        const icon = document.querySelector(`#${player} .icon img`);
        const newIconSrc = getIconForScore(score);
        if (icon.src !== newIconSrc) {
            icon.src = newIconSrc;
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateScores();
});
