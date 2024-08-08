"use strict";

// 005 Переменные и строгий режим!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);

// var name = 'Ivan';

// {
//     var result = 50;
// }


// 006 Классификация типов данных в JavaScript!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let number = 4.6;

// console.log(-4/0); //infinity
// console.log('string' * 9); //NaN

// const persone = "Alex 5 asdasdasd";

// const bool = false;

// // console.log(something); //null

// let und;
// console.log(und); //undefiend

// const obj = {   //Обьект и его свойства
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name)
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; //массив
// console.log(arr[0]);

// 007 Простое общение с пользователем!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// // answers[0] = prompt('Как ваше имя?', '');
// // answers[1] = prompt('Как ваша фамилия?', '');
// // answers[2] = prompt('Сколько вам лет?', '');

// // document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null)); // оффициально признанная ошибка


//008 Интерполяция (ES6)

// const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4'); //конкотинация строк
// console.log(`https://someurl.com/${category}/5`); //Интерполяция строк

// const user = 'Ilya';

// alert(`Hello, ${user}`);

//009 Операторы в JS

// console.log('arr' + " - object");
// console.log(4 + +" - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr); 

// console.log(5%2);

// console.log(2*4 === '8');

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

//010 Учимся работать с системой контроля версий Git и с сервисом GitHub

//012 Практика, ч.1. Начинаем создавать приложение!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Какой последний фильм вы посмотрели?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Какой последний фильм вы посмотрели?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// 013 Условия !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!')
// }

// (num === 50) ? console.log('Ok!') : console.log('Erorr'); //Тернарный оператор
// 4 + 4 / Бинарный
// +4 / Унарный

// const num = "50"; // строгое сравнение

// switch (num) {
//     case 49: 
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case "50":
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }


// 014 Циклы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// 


// 015 Практика, ч2. Применяем условия и циклы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Какой последний фильм вы посмотрели?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// // let i = 0;

// // while (i < 2) {
// //     const a = prompt('Какой последний фильм вы посмотрели?', ''),
// //         b = prompt('На сколько оцените его?', '');
// //     i++;

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //         personalMovieDB.movies[a] = b;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // }

// // do {
// //     const a = prompt('Какой последний фильм вы посмотрели?', ''),
// //         b = prompt('На сколько оцените его?', '');
// //     i++;

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //         personalMovieDB.movies[a] = b;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // } while (i < 2);

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);


// 016 Функции, стрелочные ф-ции (ES6)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let num = 20;

// function showFirstMessage(text) { // function declaration создается до начала выполнения скрипта, можно вызовать перед объявлением
//     console.log(text);
//     console.log(num); // идет на уровень выше искать
// }

// showFirstMessage("hello world!");
// console.log(num);

// // function calc(a, b) {
// //     return (a + b); // функция на это заканчивается 
// // }

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {  // function expression создается только тогда, когда доходит поток кода, можно вызвать только после объявления
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// }; //стрелочная функция не имеет своего контекста (this)

// const calc = (a, b) => a + b; // если в одну строку

// const calc = a => a + b; // если имеет один аргумент

//017 Методы и свойства строк и чисел!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const str = "teSt";
// const arr = [1, 2, 4];

// // console.log(str[2] = "d");

// console.log(str.toUpperCase()); //метод изменения регистра
// console.log(str.toLowerCase()); //метод изменения регистра
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit")); //поиск подстроки

// const logg = "Hello world";

// console.log(logg.slice(6)); //метод отрезания части строки
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11)); //метод отрезания части строки, не принимает минусовые значения

// console.log(logg.substr(6, 5)); // вторая циферка это  длина сколько символов надо вырезать. Устарела

// const num = 12.2;
// console.log(Math.round(num)); //округление числа

// const test = "12.2px";
// console.log(parseInt(test)); //первразает строку в целое число
// console.log(parseFloat(test)); // первразает строку в дробное число

// 018 Практика , ч3. Используем функции!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Какой последний фильм вы посмотрели?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('Error')
//     }
// }

// writeYourGenres();

// showMyDB();

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
//     }
// }

