import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovies';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/servies/movies.servie';
@Component({
    selector: 'movie-content',
    templateUrl: './movie-content.component.html',
    styleUrls: ['./movie-content.component.scss']
})
export class MovieContentComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {

    }
    movie: IMovie;
    public similarMovies: IMovie[] = [];
    ngOnInit() {
              
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            this.similarMovies = [];
            const otherMovies = [];
            const similarMoviesReplays = [];    
            this.movieService.moviesData.map(el => {
                if (el.id == id) {
                    this.movie = el;
                } else {
                    otherMovies.push(el)
                }
            });
             otherMovies.map(movie => {
                this.movie.genres.map(el => {
                    if (movie.genres.includes(el)) {
                        similarMoviesReplays.push(movie)
                    }
                })
            })
            this.similarMovies = similarMoviesReplays.filter((elem, index, self) => {
                return index === self.indexOf(elem);
            });
        });


    }
}