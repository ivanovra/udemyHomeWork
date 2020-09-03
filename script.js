let numberOfFolms = (prompt('Сколько фильмов вы уже посмотрели?',''));

let personalMovieDB = {
    count: numberOfFolms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let q1 = (prompt('Один из последних просмотренных фильмов?','')),
    q2 = (prompt('На сколько оцените его?','')),
    q3 = (prompt('Один из последних просмотренных фильмов?','')),
    q4 = (prompt('На сколько оцените его?',''));

personalMovieDB.movies = {
    [q1]: q2,
    [q3]: q4
};

console.log(personalMovieDB.movies);