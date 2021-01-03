
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MovieArray} from './my-home-component/moviesarray';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  private _url: string = "http://localhost:3000/movies/";

  constructor(private http:HttpClient) { }

  getMovies(): Observable<MovieArray[]>{
    return this.http.get<MovieArray[]>(this._url);
  }

  getMovie(id:string): Observable<MovieArray>{
    return this.http.get<MovieArray>(`${this._url}${id}`);
  }

}
