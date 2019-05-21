import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'A great film title';
  imageSrc = 'https://image.tmdb.org/t/p/original/';
  movies: [];

  constructor(
    private movieService: MovieService
  ){
    this.movieService.getMovies()
    .subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  onClick(title: string) {
    alert('You clicked movie ' + title);
  }

  clickIt(event?: MouseEvent) {
    const message = event ? 'Propagation stopped!' : 'With propagation :-|';
    alert('Click!' + message);
    if (event) { event.stopPropagation(); }
  }
}
