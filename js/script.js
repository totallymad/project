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

// 019 Callback- функции!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function first() {
//     //Do something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// //если функции идут одни за другой, необязательно что выполняются так же

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// 020 Объекты, деструктуризация объектов (ES6) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("test");   // собсвтенный метод
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; //деструктуризация объекта
// console.log(border);

// console.log(Object.keys(options).length); //Количество свойств объектов

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }  //перебор свойств объекта

// console.log(counter);

// 021 Массивы и псевдомассивы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const arr = [1, 2, 3, 6, 8];
// // arr[99] = 0;
// // console.log(arr.length); // свойство length состоит из последнего индекса + 1
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`); //перебор массива
// });

// arr.pop(); //удаляет последний элемент массива
// arr.push(10); //добавляет элемент в конец

// console.log(arr);

// for (let i = 0; i < arr.length; i++) { // тоже перебор но с помощью цикла 
//     console.log(arr[i]);
// }

// for (let value of arr) { // тоже перебор. в двух последних можно использовать break и continiue, в первом нет
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); // сортирует всё как строки a-z а массив чисел 1-10
// console.log(products.join('; '));

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) { //позволяте нормально отсортировать используя sort
//     return a - b;
// }

// 022 Передача по ссылке или по значению, Spread оператор (ES6-ES9)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает ссылку а не значение

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {      //создание копии ПОВЕРХНОСТНОЙ копии объекта
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10; // вложенный объект тоже поменялся 

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add); // создание ПОВЕРХНОСТНОЙ копиии объекта

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); /// создание ПОВЕРХНОСТНОЙ копии массива

// newArray[1] = 'adsadsasddssa';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // оператор разворота 

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = { ...q }; // самый новый способ создания поверхностной копии объекта появлися в ES8, Задокументирован в ES9

// console.log(newObj);

// 023 Основы ООП, прототипно-ориентированное наследование

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier); //создаем новый объект джон который будет прототипно наследоваться от солжата 

// // const john = {
// //     health: 100,
// // };

// // john.__proto__ = soldier;  //установили прототипом джона солдата -- старый способ

// // Object.setPrototypeOf(john, soldier); // тоже самое но новый способ

// console.log(john.armor);
// john.sayHello();


//024 Практика , ч4. Используем объекты!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Какой последний фильм вы посмотрели?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 0; i < 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

//             if (genre === '' || genre === null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вообще');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         })
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         };
//     }
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();


//025 Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints!!!!!!!!!!!!

//026 Динамическая типизация в JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // To string

// // 1) Самый старый 
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2) конкотинация
// console.log(typeof(5 + '')); // при сложении со строкой получается строка

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // to Number

// // 1) 
// console.log(typeof(Number('4')));

// // 2)
// console.log(typeof(+'5'));

// // 3)
// console.log(typeof(parseInt('15px', 10)));


// // let answ = +prompt('Hello', '');

// // To boolean

// // всегда False
// // 0, '', null, undefined, NaN;

// // 1)

// let switcher = null; 

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// // 2)
// console.log(typeof(Boolean('4')));

// // 3)
// console.log(typeof(!!"4444444"));

//031 События и их обработчики!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

// const btns = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// let i = 0;

// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type)
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
//     // console.log(e.target);
//     // e.target.remove();
// };

// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement); // всплытие событий - сначала срабатывает внутри, а потом идет наверх

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true}); //once true сработает только одын раз
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();              // отменить стандартное поведение браузера
//     console.log(event.target);
// });

// 032 Навигация по DOM - элементам, data-атрибуты, преимущество for_of!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(document.body); //body
// console.log(document.documentElement);  //html
// console.log(document.body.childNodes); // Все элементы body
// console.log(document.body.firstChild); //первый элемент
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild); //последний элемент

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentNode.parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) { // перебор псевдомассива элементов body и если текст то пропускаем
    if (node.nodeName == '#text') {
        continue;
    }


    console.log(node);
}
