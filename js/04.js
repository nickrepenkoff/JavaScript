'use strict';


const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberedFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a;
            let b;
            a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a != a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        };
    },
    detectPersonalLvl: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre == null || genre === ''){
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        };
        personalMovieDB.genres.forEach(function(item, i,){

            console.log(`Любимый жанр под номером: ${i + 1} - это ${item}`)
        });
    }
}

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();