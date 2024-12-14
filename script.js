document.addEventListener('DOMContentLoaded', () => {
    const loadRecommendationsButton = document.querySelector('.load-recommendations');
    const showChartButton = document.querySelector('.show-chart');
    const timeFrameButtons = document.querySelectorAll('.time-frame');

    loadRecommendationsButton.addEventListener('click', () => {
        alert('Loading recommendations...');
    });

    showChartButton.addEventListener('click', () => {
        alert('Showing chart...');
    });

    timeFrameButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Selected time frame: ${button.dataset.time} minute(s)`);
        });
    });
});
