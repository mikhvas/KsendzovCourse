// HW_1* Задания с разным количеством звездочек:)
// 1*:Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function(age)
function checkAge(age) {
    if (age < age_2) {               
   
        console.log("You don't have access cause your age is" + " "+ age + " "+ "It's less then")     
    }
    
    else if (age >= age_2 && age < age_3)  {                                            
    
         
        console.log("Welcome!" )
    }
    else if (age > age_3 ) {                                                             
    
             console.log("Keep calm and look Culture channel!" )
    }
    
    else {
        console.log("Technical work" )                            
    }

}
checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)
// 2*:Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

function checkAge(age) {

    if (typeof age == "number"){

    if (age < age_2) {               
   
        console.log("You don't have access cause your age is" + " "+ age + " "+ "It's less then")     
    }
    
    else if (age >= age_2 && age < age_3)  {                                            
    
         
        console.log("Welcome!" )
    }
    else if (age > age_3 ) {                                                             
    
             console.log("Keep calm and look Culture channel!" )
    }
    
    else {
        console.log("Technical work" )                            
    }
    } else {console.log("not integer value")}

}

checkAge(17)
checkAge("0123")
// 3**:Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function checkAge(age) {
    age = Number(age);                               //сначала преобразовываем в намбер

    if (!isNaN(age)){                          //а после намбер отфильтровыфаем НаН и если да, то условия работают
//     if (Number(age))    {     
    // if (+age)    {                   

    if (age < age_2) {               
   
        console.log("You don't have access cause your age is" + " "+ age + " "+ "It's less then")     
    }
    
    else if (age >= age_2 && age < age_3)  {                                            
    
         
        console.log("Welcome!" )
    }
    else if (age > age_3 ) {                                                             
    
             console.log("Keep calm and look Culture channel!" )
    }
    
    else {
        console.log("Technical work" )                            
    }
    } else {console.log("not integer value")}

}

checkAge(17)
checkAge("22")
checkAge("22фвыф")

// 4***:Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
function checkAge(age) {
    age = Number(age);                               

    if (!isNaN(age)){                        
                  

    if (age < age_2) {               
   
        console.log("You don't have access cause your age is" + " "+ age + " "+ "It's less then")     
    }
    
    else if (age >= age_2 && age < age_3)  {                                            
    
         
        console.log("Welcome!" )
    }
    else if (age > age_3 ) {                                                             
    
             console.log("Keep calm and look Culture channel!" )
    }
    
    else {
        console.log("Technical work" )                            
    }
    } else {console.log("not integer value")}

}
let agePromt = prompt("Какой Ваш возраст?")
alert ("Спасибо")

checkAge(agePromt)

// Привязка к html

// <!DOCTYPE html>
// <html1 lang="en">
// <head>

// <meta charset="UTF-8">
// <meta http-equiv="X-RU-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <script src="./qwert.js"></script>
// <title>Document</title>

// </head>
// <body>
    
// </body>
// </html1>

 
