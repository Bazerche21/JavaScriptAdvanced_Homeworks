function howManyDigits(number) {
    let numberOfDigits = Math.abs(number).toString().length;
    return `${numberOfDigits} Digits`;
}

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function isPositiveNegative(number) {
    if (number < 0) {
        return "Negative";
    } else {
        return "Positive";
    }
}


function allThreeTogether(number) {
    console.log(howManyDigits(number), isEvenOrOdd(number), isPositiveNegative(number));
}


allThreeTogether(-15);