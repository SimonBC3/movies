import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInfo } from 'src/models/movieInfo.interface';
import { ApiService } from 'src/app/services/api.services'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //movie: MovieInfo;
  selectedMovie?: MovieInfo;
  movies?: MovieInfo[];
  constructor(private api: ApiService, private router:Router) { }
  
  ngOnInit(): void {
    this.api.getMovies().subscribe(data => {
      this.movies = data.results
      console.log(this.movies)
    })
  }

  onSelect(movie: MovieInfo): void {
    this.router.navigate(['details', movie])
  }

}
