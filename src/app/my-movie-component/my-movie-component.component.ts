import { Component, OnInit } from '@angular/core';
import { MoviesListService } from '../movies-list.service';
import { ActivatedRoute } from '@angular/router';
import { MovieArray } from '../my-home-component/moviesarray';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.scss']
})
export class MyMovieComponentComponent implements OnInit {

  id: any;
  private subscribe: Subscription;
  movie: MovieArray;
  constructor(private route: ActivatedRoute, private _moviesarray: MoviesListService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscribe = this._moviesarray.getMovie(this.id).subscribe(movie => this.movie = movie)
  }

}
