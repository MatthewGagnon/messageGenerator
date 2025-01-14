const readline = require("readline");

// Data for the astrology message generator
const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo",
    "Virgo", "Libra", "Scorpio", "Sagittarius",
    "Capricorn", "Aquarius", "Pisces"
];

const themes = ["Love", "Career", "Health"];

const insights = {
    Love: [
        "You will find joy in unexpected places.",
        "An old flame might return.",
        "Romance is in the air."
    ],
    Career: [
        "Opportunities will arise, seize them.",
        "A colleague will offer valuable advice.",
        "Stay focused on your goals."
    ],
    Health: [
        "Rest and relaxation are key today.",
        "Take time to nourish your body.",
        "An outdoor activity will boost your mood."
    ]
};

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and get user input
function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

// Main function to generate a random message
async function generateMessage() {
    try {
        const zodiac = await askQuestion(`Enter your Zodiac Sign (${zodiacSigns.join(", ")}): `);

        // Validate zodiac sign
        if (!zodiacSigns.includes(zodiac.trim())) {
            console.log("Invalid Zodiac Sign! Please try again.");
            rl.close();
            return;
        }

        const theme = await askQuestion(`Choose a Theme (${themes.join(", ")}): `);

        // Validate theme
        if (!themes.includes(theme.trim())) {
            console.log("Invalid Theme! Please try again.");
            rl.close();
            return;
        }

        // Generate random insight
        const randomInsight = insights[theme][Math.floor(Math.random() * insights[theme].length)];

        // Display the message
        const message = `${zodiac.trim()}, in ${theme.trim()}, ${randomInsight}`;
        console.log(`\nYour Astrology Message:\n${message}`);
    } finally {
        rl.close();
    }
}

// Run the program
generateMessage();
