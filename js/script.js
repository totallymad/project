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

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм вы посмотрели?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Какой последний фильм вы посмотрели?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// let movies = {
//     name: "",
//     grade: ""
// };

// movies.name = prompt('Какой последний фильм вы посмотрели?', '');
// movies.grade = prompt('На сколько оцените его?', '');

// console.log(movies);


