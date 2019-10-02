import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private movieKey = 'favoriteMovies';
  private planetsKey = 'favoritePlanets';

  private favoriteMovies = [];
  private favoritePlanets = [];

  constructor() {
    // load already favorited movies and planets
    this.loadFromStorage();
  }

  /**
   * loads stored movies and planets from the local storage
   */
  loadFromStorage() {
    const storedMovies = JSON.parse(localStorage.getItem(this.movieKey));
    this.favoriteMovies = storedMovies;
    const storedPlanets = JSON.parse(localStorage.getItem(this.planetsKey));
    this.favoritePlanets = storedMovies;
  }

  /**
   * adds a film to the list of favorite and stores in localstorage
   * @param film: film object to add to the list
   */
  addFilm(film) {
    this.favoriteMovies.push(film);
    // save to local storage
    this.saveToStorage(this.movieKey, this.favoriteMovies);
  }

  /**
   * adds a planet to the list of favorite and stores in localstorage
   * @param planet: planet object to add to the list
   */
  addPlanet(planet) {
    this.favoriteMovies.push(planet);
    // save to local storage
    this.saveToStorage(this.planetsKey, this.favoritePlanets);
  }

  /**
   * @param film : film to remove from favoritelist
   * removed film from list of favorite and then stores to local storage
   */
  removeFilm(film) {
    // save to local storage
    this.saveToStorage(this.movieKey, this.favoriteMovies);
  }

  /**
   * @param planet : planet to remove from favorite list
   */
  removePlanet(planet) {
    // save to local storage
    this.saveToStorage(this.planetsKey, this.favoritePlanets);
  }

  /**
   * @param key : specifies key for local storage.
   * @param data: data to be stored in local storage
   */
  saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }


}
