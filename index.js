//Function that uses 1 parameter
function introduction (name) {
    return `Hi, my name is ${name}.`
}

console.log(introduction("Atara"));

//Function that uses 2 parameters
function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}

logTwoValues(5,10);

function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Maureen", "Javascript"));

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo();

function introductionWithLanguageOptional (name, language = "Javascript") {
    console.log(`Hello, my name is ${name} and I have completed my assignment in ${language}.`)
}

introductionWithLanguageOptional("Lyn");