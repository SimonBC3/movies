import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInfo } from 'src/models/movieInfo.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.services';
import { MatFormFieldControl } from '@angular/material/form-field';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { outputAst } from '@angular/compiler';
import { title } from 'process';
import { ErrorStateMatcher } from '@angular/material/core';
import { type } from 'os';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  //movie: MovieInfo;
  filterPost = ''
  selectedMovie?: MovieInfo;
  movies?: MovieInfo[];
  notFound?: boolean;

  searchControl = new FormControl('', [Validators.required])

  constructor(private api: ApiService, private router:Router) { }
  
  ngOnInit(): void {
    
    this.loadData()
  }

  onSelect(movie: MovieInfo): void {
    console.log(movie)
    this.router.navigate(['details', movie.id])
  }

  onKey(title:string) {
    console.log(title)
    let id: number = -1 
  
    if(title == '' || typeof parseInt(title) == 'number') {
      this.notFound = true
      this.loadData()
    }
    console.log(this.notFound)

    this.api.getByMovieTitle(title).subscribe(apiAnswer => {
        console.log('found')
        this.movies = apiAnswer.results
    })
  }

  private loadData():void {
    this.api.getMovies().subscribe(data => {
      this.movies = data.results
      console.log(this.movies[0])
    })
  }
}

