import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieContentComponent } from './pages/movie-content/movie-content.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MovieItemComponent } from './pages/movies-list/movie-item/movie-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes =[
  { path: '', redirectTo: 'movie', pathMatch: 'full'}, 
  { path: 'movie', component: MoviesListComponent},
  { path: 'movie/:id', component: MovieContentComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [
    MovieContentComponent,
    MoviesListComponent,
    MovieItemComponent,
    NotFoundComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
