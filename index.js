const process = require('node:process');


const characters = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    capitals: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
};


function generatePassword(length, includeNumbers , includeCapitals, includeSymbols) {
    let allCharacters = characters.lower;
    if (includeNumbers) allCharacters += characters.numbers;
    if (includeCapitals) allCharacters += characters.capitals;
    if (includeSymbols) allCharacters += characters.symbols;

    let password = '';
    for (let i = 0; i <= length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    return password;

}
const args = process.argv.slice(2);

console.log(args);


const options = {
    length: 8,
    numbers: false,
    capitals: false,
    symbols: false
};

args.forEach((arg, index) => {
    if (arg === '--help' || arg === '-h') {
        console.log(`
        Usage: generate-password [options]
        
        Options:
        -l, --length <number>  length of the password (default: 8)
        -n, --numbers          include numbers
        -c, --capitals         include capital letters
        -s, --symbols          include symbols
        -h, --help             display help for command
        `);
        process.exit();
    }
    if (arg === '--length' || arg === '-l') {
        options.length = parseInt(args[index + 1]);
    }
    if (arg === '--numbers' || arg === '-n') {
        options.numbers = true;
    }
    if (arg === '--capitals' || arg === '-c') {
        options.capitals = true;
    }
    if (arg === '--symbols' || arg === '-s') {
        options.symbols = true;
    }
});

const password = generatePassword(options.length, options.numbers, options.capitals, options.symbols
);



console.log(password);