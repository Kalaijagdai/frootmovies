import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovies';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
    @Input() movie: IMovie;
    constructor() {

    }
    ngOnInit() {
    }
}