function Storage() {

}

Storage.prototype.addFilmToStorage = function (film) {
    //storageden tüm filmleri bir diziye al
    let films = this.getFilmsFromStorage();
    //dizi içerisine yeni filmi ekle
    films.push(film);
    //dizinin son halini localstoragee tekrar yaz
    localStorage.setItem("films", JSON.stringify(films));

}
Storage.prototype.getFilmsFromStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
Storage.prototype.getFilmFromStorage = function (title) {
    let films;
    let returnFilm;
    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
        films.forEach(function (film, index) {
            if (film.title === title) {
                returnFilm = film;
                return returnFilm;
            }
        })
    }
    return returnFilm;
}
Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem('films');
}
Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {
        if (film.title === filmTitle) {
            films.splice(index, 1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films));
}