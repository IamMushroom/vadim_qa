// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
console.log("Задание 1*:")
const check_age_1 = function (age) {
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
console.log(check_age_1(17))
console.log(check_age_1(18))
console.log(check_age_1(61))

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log("Задание 2*:")
const check_age_2 = function (age) {
    if (typeof (age) != "number") {
        return "ERROR: Worng type!"
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
console.log(check_age_2(60))
console.log(check_age_2("Hello!"))

// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log("Задание 3**:")
const check_age_3 = function (age) {
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
console.log(check_age_3(60))
console.log(check_age_3("27"))
console.log(check_age_3("Hello!"))
