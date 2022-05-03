// // задания со * Анатолий 1.
// Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result = 1
while (i <11) {
    result = result *2 
    i++
}
console.log(result)   


//мое решение


let num=2;
let power=10;
let result=1;
for(let subpower=1;subpower<=power;subpower++)
{

console.log(result=result*num);

};


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

//Вариант 1

const power = function(num) {
let result = 1;
for (let i = 1; i <= num; i++) {
    result = result *2
}
return result
}
console.log(power(10))

вариант 2

const power2 = function(num) {
    return 2**num
}

console.log(power2(10))


//вариант 3

const power3 = function(num) {
    return Math.pow(2,num)
}
console.log(power3(10))


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ":)"
let result2 = ""
for (let i=1; i<=4; i++) {
    result2+=word
    console.log(result2)
}



// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)


//вариант 1 

function printSmile(stroka, numderOfRows) {

    let result = "";
    for (let i =1 ; i<=numderOfRows; i++){
      result+=stroka
      console.log(result)

    }
}
printSmile(":)", 5)


//вариант 2

function printSmile(stroka, numberOfRows) {
 for (let i = 1; i<=numberOfRows; i++){

 console.log(stroka.repeat(i))
 }

}
printSmile(":)", 6)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

//вариант 1
const getWordStructure = function(word) {
 let n = 0;
 let k = 0;
 let gl = ["a", "A", "e", "E", "i", "I", "o", "O","u", "U", "y", "Y"];
 let sogl = ["b", "B", "c", "C", "d", "D", "f", "F","g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M",
 "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"]

 for (i = 0; i < word.length; i++){

for(j = 0; j < gl.length; j++) {
    if(word[i] === gl[j]){
        n++;
        break;
    }
}
for(q = 0; q < sogl.length; q++) {
    if(word[i] === sogl[q]){
        k++;
        break;
    }
}


 }
console.log("Slovo " + word + " sostoit iz " + n + " glasnykh i " + k + " soglasnykh")
}
getWordStructure("Andrey HUESUS")

//вариант 2

function getWordStructure(word) {
 const vowels = "aeiouy".split ("")
 const consonants = "bcdfghjklmnpqrstwxz".split ("")
let numberOfVowels = 0;
let numberofConsonants = 0;
for (char of word.toLowerCase()){      //слово переводит в нижний регистр
    if (vowels.includes(char)) numberOfVowels++;                     //includes включена
    if (consonants.includes(char)) numberofConsonants++
}
console.log (`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberofConsonants} согласных букв`)
}
getWordStructure("Andrey HUESUS")     // Проверки: 'case', 'Case', 'Check-list'

3 вариант

function getWordStructure(word) {
    let vowels = word.match(/[aeiouy]/gi); 
    let consonants = word.match(/[bcdfghjklmnpqrstwxz]/gi); 
    console.log (`Слово ${word} состоит из ${vowels.length} гласных и ${consonants.length} согласных букв`
}
// getWordStructure("case")


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)


//вариант 1 
function isPalindrom(word){
let newStroka = "";
for (i = word.length - 1; i>=0; i --){
    newStroka = newStroka + word[i]
}
if (word.toLowerCase() == newStroka.toLowerCase()){
console.log(word, " - pflindrom")
} else {
    console.log (word, "- not palindrom")
}

}

isPalindrom("Ab1ba")
isPalindrom("Ab12ba")


//вариант 2

function isPalindrom2(word) {

    return word.toLowerCase() == word.toLowerCase() .split(""). reverse(). join("")
}
console.log(`${isPalindrom2("Abba") ? "Its palindrom" : "Its not palindrom"}`)
Проверки: 'abba', 'Abba'
вариант 3

  function isPalindrom3(str) {
      str = str.toLowerCase()

      //find the length of a string

      const len = str.length;

      //loop trough half of the string

      for (let i = 0; i < len / 2; i++) {


        //check if first and last string are same

        if (str[i] !== str[len -1 -i]) {
            return "its not palindrom"
        }

      }
      return "its palindrom "
    }
    console.log(isPalindrom3("abba"))

  console.log("Roman and Vasyzn" .split(" "))  //split разбивает слово на массив сплит(" пробел") - разделитель   [ 'Roman', 'and', 'Vasyzn' ]
  console.log([1,2,3,4,5]. join(""))       // join собирает массив в строку      12345
  console.log("ABABBAa".toLowerCase())   //данная функция приводит значения стринга к нижнему регистру    ababbaa
  console.log([ 'Roman', 'and', 'Vasyzn' ]. reverse())   // реверс массива  [ 'Vasyzn', 'and', 'Roman' ]