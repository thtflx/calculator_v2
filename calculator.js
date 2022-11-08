// // Документни топобди
// let result = document.querySelector('#input-text')

// // calculate функциясини ёзобди
// function calculate(number) {
//     result.value = result.value + number
// }

// // 'тенглик кнопкаси' Натижага амаллар кетма-кет келиб колса, хатони топобди
// function Result() {
//     try {
//         result.value = eval(result.value)
//     } catch {
//         alert('Enter the valid input!')
//         result.value = ''
//     }
// }

// // 'тозалаш кпопкаси' ни функциясини тузобди
// function clr() {
//     result.value = ''
// }

// // 'учириш кнопкаси' ни функциясини тузобди
// function del() {
//     result.value = result.value.slice(0, -1);
// }



// REWRITING CODE BY MYSELF:
// План:
// 1. Документни топобди
// 2. calculate функциясини ёзобди
// 3. 'тенглик кнопкаси' Натижага амаллар кетма-кет келиб колса, хатони топобди
// 4. 'тозалаш кпопкаси' ни функциясини тузобди
// 5. 'учириш кнопкаси' ни функциясини тузобди

// let elInput = document.querySelector('#input-text');

// function calculate(number) {
//     elInput.value += number;
// }
// calculate()

// function Result() {
//     try {
//         elInput.value = eval(elInput.value)
//     } catch {
//         alert('Enter correct input!')
//         elInput.value = ''
//     }
// }
// Result()

// function clr() {
//     elInput.value = ''
// }
// clr()

// function del() {
//     elInput.value = elInput.value.slice(0, -1)
// }
// del()


// REWRITING CODE BY MYSELF:
// План:
// 1. Документни топобди
// 2. calculate функциясини ёзобди
// 3. 'тенглик кнопкаси' Натижага амаллар кетма-кет келиб колса, хатони топобди
// 4. 'тозалаш кпопкаси' ни функциясини тузобди
// 5. 'учириш кнопкаси' ни функциясини тузобди


let inputEl = document.querySelector('#input-text')

let calculate = (number) => {
    inputEl.value += number
}


let Result = () => {
    try {
        inputEl.value = eval(inputEl.value)
    } catch {
        alert('Enter the correct input!')
        inputEl.value = ''
    }
}

let clr = () => {
    inputEl.value = ''
}

let del = () => {
    inputEl.value = elInput.value.slice(0, -1)
}