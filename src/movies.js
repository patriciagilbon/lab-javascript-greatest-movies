// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map(director => director.director);
    return directorArray;
}
console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const StevenSpielberg = moviesArray.map(movie => (movie.director == 'Steven Spielberg' && 
    movie.genre.includes('Drama')))
    const checkFilm = StevenSpielberg.filter(movie => movie).length
    return checkFilm;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
test = [{ score: 6 }, { score: '' }, {}]
function scoresAverage(moviesArray) {
    const removeUndefined = moviesArray.filter(movie => movie.score!= undefined)
    const score = removeUndefined.reduce((a, b) => a + b.score, 0)
    const items = moviesArray.length;
    if (items == 0){
        return 0
    } else {
        return Math.round(((score/items) + Number.EPSILON) * 100) / 100;
    }
}
console.log('scoresAverage')
console.log(scoresAverage(test))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const DramaFilter = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const AverageDrama = DramaFilter.reduce((a,b) => a+b.score, 0)
    if(DramaFilter.length == 0){
        return 0;
    } else {
        return Math.round(((AverageDrama/DramaFilter.length) + Number.EPSILON) * 100) / 100;
    }
}
console.log('dramaMoviesScore')
console.log(dramaMoviesScore(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const Ordered = moviesArray.sort(function(a, b){
        if(a.year < b.year) { return -1; }
        if(a.year > b.year) { return 1; }
        if(a.year === b.year) { 
            if(a.title<b.title){return -1;}
            if(a.title>b.title){return 1;} 
        }
        return 0;
    })
    return Ordered.sort();
}
console.log(orderByYear(test));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const GetTitle = moviesArray.map(movie => movie.title)
    const OrderedTitle = GetTitle.sort()
    return OrderedTitle.slice(0, 20)
}
console.log(orderAlphabetically(movies))
