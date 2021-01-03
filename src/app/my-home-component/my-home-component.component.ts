import { Component, OnInit } from '@angular/core';
import { MoviesListService } from '../movies-list.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.scss']
})
export class MyHomeComponentComponent implements OnInit {

  public MoviesArray =[];

  constructor(private _moviesarray: MoviesListService) { }

  ngOnInit(){
    this._moviesarray.getMovies()
    .subscribe((data) => this.MoviesArray = data);
  }

}
