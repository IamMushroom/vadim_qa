// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
console.log("Задание 4***:")
const check_age_4 = function (age) {
    if (typeof (age) != "number") {
        if (typeof (age) == "string" & !(isNaN(age))) {
            age = parseInt(age)
        } else {
            return "ERROR: Worng type!"
        }
    }
    let age_2 = 18
    let age_3 = 60
    if (age < age_2) {
        result = 'You don’t have access cause your age is ' + age + ' It’s less then '
    }
    else if (age >= age_2 & age < age_3) {
        result = 'Welcome  !'
    }
    else if (age > age_3) {
        result = 'Keep calm and look Culture channel'
    }
    else {
        result = 'Technical work'
    }
    return result
}

const print_age = function (age) {
    let last_sym = String(age).slice(-1)
    let result = "Тебе " + age + " "
    if (last_sym == "1") {
        result += "год"
    } else if (last_sym == "2" || last_sym == "3") {
        result += "года"
    } else {
        result += "лет"
    }
    return result
}

age = prompt('Сколько тебе лет?', 60)
const header = document.getElementById("header")
header.innerHTML = print_age(age)
const div = document.getElementById("output")
div.innerHTML = check_age_4(age)