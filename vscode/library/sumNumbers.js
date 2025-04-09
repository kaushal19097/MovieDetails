function sumNumbers(...args) {
    return args.reduce((total, num) => total + num, 0);
}

function getValidNumbers() {
    let validNumbers = [];
    while (true) {
        let input = prompt("Enter a number (or type 'stop' to finish):");
        if (input === 'stop') break;
        let number = parseFloat(input);
        if (!isNaN(number)) validNumbers.push(number);
    }
    return sumNumbers(...validNumbers);
}

console.log("Total sum:", getValidNumbers());
