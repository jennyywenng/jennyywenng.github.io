function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + " " + noun + "s."
}

function getRandomNum(max) {
    let rand = Math.random() * max;
    return Math.floor(rand)
}

let x = getRandomNum(20);

let y = getRandomNum(10);

let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z)

let sentence = createSentence(avg, "shark")

console.log(sentence);