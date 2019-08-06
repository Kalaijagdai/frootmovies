import { Injectable } from "@angular/core";
import { IMovie } from '../models/IMovies';
import { movies } from '../data/movies.mock-data';
@Injectable()
export class MovieService {
    public moviesData: IMovie[] = [];
    constructor(){
        this.moviesData = movies;
    }
    
}