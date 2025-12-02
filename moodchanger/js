
const buttons = document.querySelector('#buttons');


const moods = {
    Happy:  { bg: '#e2d2d2ff', text: '#c77b7bff', quote: 'Happiness is a warm puppy.'},
    Calm:   { bg: '#ddd7e4ff', text: '#9a6ae0ff', quote: 'Peace comes from within. Do not seek it without.'},
    Sad:    { bg: '#4a9161ff', text: '#efefc2ff', quote: 'Sadness flies away on the wings of time'},
    Anxious:    { bg: '#e27b7bff', text: '#bd30b6ff', quote: 'The best use of imagination is creativity, the worse use of imagination is anxiety.'},
};

buttons.addEventListener('click', function(event) {
    if (event.target.classList.contains('mood-btn')) {
        const mood = event.target.getAttribute('data-mood');
        const theme = moods[mood];
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    quote.textContent = theme.quote;
    }
});
