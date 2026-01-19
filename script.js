function updateClock() {
    const timeElement = document.getElementById('clock');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
}

// Motivatsion so'zlar ro'yxati
const quotes = [
    "Keleshek búgin baslanadı!",
    "Bilim - eń úlken baylıq.",
    "Hár kúni bir qádem alǵa!",
    "Múmkin emes nárse joq!",
    "Jetiskenlik - bul miynet nátiyjesi.",
    "Qıyınshılıqlar seni sındırıw ushın emes, seni kúshli etiw ushın keledi."
];

function setRandomQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
}

setInterval(updateClock, 1000);
updateClock();
setRandomQuote();