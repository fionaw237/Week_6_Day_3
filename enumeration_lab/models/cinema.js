const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByTitle = function() {
  return this.films.map(function(film) {
    return film.title;
  })
}

Cinema.prototype.findFilm = function(title) {
  return this.films.find(function(film) {
    return (film.title === title) ? true : false;
  })
}

Cinema.prototype.filmsByProperty = function(property, value) {
  return this.films.filter(function(film) {
    return film[property] === value;
  })
}

Cinema.prototype.hasFilmFromYear = function(year) {
  return this.films.some(function(film) {
    return film.year === year
  })
}

Cinema.prototype.filmsOverLength = function(time) {
  return this.films.every(function(film) {
    return film.length > time;
  })
}

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce(function(accumulator, film) {
    return accumulator + film.length;
  }, 0);
}

module.exports = Cinema;
