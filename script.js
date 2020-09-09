"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = (+prompt('Сколько фильмов вы уже посмотрели?',''));
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = (+prompt('Сколько фильмов вы уже посмотрели?',''));
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Киноман'); 
        } else {
        console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);

            if (gener != null && gener != "") {
                personalMovieDB.genres[i - 1] = gener;
            } else {
                console.log('Вы ввели некоректные данные');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },  
};

personalMovieDB.start(); 

// personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);