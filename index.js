// Random Quote Generator

const quotes = [
    "Family is not an important thing, it's everything. - Michael J. Fox",
    "The love of a family is life's greatest blessing.",
    "In every conceivable manner, the family is a link to our past, a bridge to our future. - Alex Haley",
    "Family means no one gets left behind or forgotten. - David Ogden Stiers",
    "The memories we make with our family is everything. - Candace Cameron Bure",
    "Happiness is having a large, loving, caring, close-knit family. - George Burns",
    "A happy family is but an earlier heaven. - George Bernard Shaw",
    "The family is one of nature's masterpieces. - George Santayana",
    "Rejoice with your family in the beautiful land of life. - Albert Einstein",
    "Family is the heart of a home.",
    "The strength of a family, like the strength of an army, lies in its loyalty to each other. - Mario Puzo",
    "Families are the compass that guides us. They are the inspiration to reach great heights. - Brad Henry",
    "The love in our family flows strong and deep, leaving us memories to treasure and keep.",
    "Family is where life begins and love never ends.",
    "To us, family means putting your arms around each other and being there. - Barbara Bush",
    "The bond that links your true family is not one of blood, but of respect and joy in each other's life. - Richard Bach",
    "Family is the most important thing in the world. - Princess Diana",
    "Call it a clan, call it a network, call it a tribe, call it a family. Whatever you call it, whoever you are, you need one. - Jane Howard",
    "Having somewhere to go is home. Having someone to love is family. Having both is a blessing.",
    "Family is the anchor that holds us through life's storms.",
    "The love of a family is the greatest gift of all.",
    "Family is the thread that weaves the fabric of life.",
    "A family doesn't have to be perfect; it just needs to be united.",
    "The family is the first essential cell of human society. - Pope John XXIII",
    "Family is the key to happiness.",
    "The family is a haven in a heartless world. - Christopher Lasch",
    "Family is the glue that holds us together.",
    "The love of a family makes life beautiful.",
    "Family is the foundation of all that is good in life.",
    "A family is a little world created by love.",
    "Family is the light that guides us through the darkest times.",
    "The love of a family is like a tree: it grows strong and deep.",
    "Family is the garden of life, where love grows.",
    "The family is the cornerstone of society.",
    "Family is the greatest treasure.",
    "Family is the heartbeat of the home.",
    "The love of a family is the greatest blessing.",
    "Family is the bridge to our future.",
    "Family is the greatest source of strength.",
    "The love of a family is the foundation of happiness.",
    "Family is the greatest gift of all.",
    "Family is the heart of our lives.",
    "The love of a family is the root of all joy.",
    "Family is the sunshine of life.",
    "Family is the greatest source of love and support.",
    "The love of a family is the greatest wealth.",
    "Family is the soul of life.",
    "Family is the greatest source of happiness.",
    "The love of a family is the greatest legacy."
]

const text = document.getElementById("quote-txt");
let numOfDots = 1;
let running = true;

let infInter = setInterval(() => {
    let dot = ".";
    text.textContent = `Generate a quote${dot.repeat(numOfDots)}`
    numOfDots++;

    if (numOfDots > 3) {
        numOfDots = 1;
    }
}, 800);

function generateQuote() {
    if (running === true) {
        running = false;
        clearInterval(infInter);
    }

    let randomQuote = randomNum(quotes.length-1);

    text.textContent = quotes[randomQuote];
}

function randomNum(max) {
    return Math.floor(Math.random() * max);
}
