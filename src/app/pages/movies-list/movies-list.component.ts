import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovies';
import { MovieService } from 'src/app/servies/movies.servie';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    @Input() moviesList: IMovie[];
    moviesListOld: IMovie[];
    constructor(private movieService: MovieService) {

    }
    ngOnInit() {
        if (!this.moviesList) {
            this.moviesList = this.movieService.moviesData;
        }
        this.moviesListOld = this.moviesList
    }
    getSearch(event) {
        const value = event.target.value;
        const list = this.moviesList;
        this.moviesList = list.filter(x => {
            return x.name.toLowerCase().includes(value.toLowerCase())
        });
        if (value == '') {
            this.moviesList = this.moviesListOld;
        }

    }
}