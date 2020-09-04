"use strict";

let numberOfFilms = (+prompt('Сколько фильмов вы уже посмотрели?',''));

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// let q1 = (prompt('Один из последних просмотренных фильмов?','')),
//     q2 = (prompt('На сколько оцените его?','')),
//     q3 = (prompt('Один из последних просмотренных фильмов?','')),
//     q4 = (prompt('На сколько оцените его?',''));

for (let i = 1; i <= 2; i++) {
    let q1 = prompt('Один из последних просмотренных фильмов?',''),
        q2 = prompt('На сколько оцените его?','');

    if (q1 != null && q1 != '' && q2 != null && q2 != '' && q1.length < 50) {
        console.log ('done');
        personalMovieDB.movies[q1] = q2;
    } else {
    console.log('error');
     i--;
    }
}

// let i = 1;
// while (i <= 2) {
//     let q1 = prompt('Один из последних просмотренных фильмов?',''),
//         q2 = prompt('На сколько оцените его?','');
//     i++;
//     personalMovieDB.movies[q1] = q2;
// }

// let i = 1;
// do { 
//     let q1 = prompt('Один из последних просмотренных фильмов?',''),
//         q2 = prompt('На сколько оцените его?','');
//     personalMovieDB.movies[q1] = q2;
//     i++;                     
// } while (i <= 2);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Киноман'); 
} else {
   console.log('Произошла ошибка');
}

console.log(personalMovieDB);