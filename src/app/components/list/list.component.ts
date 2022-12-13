import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieInfo } from 'src/models/movieInfo.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  private moviesUrl:string = "https://api.themoviedb.org/3/movie/550?api_key=adf9ace52556c56fcb0427073575519e"
  public movie:string = ""

  constructor(private http: HttpClient) { }

  getMovies(): Observable<movieInfo[]> {
  return this.http.get<movieInfo[]>(this.moviesUrl)
  }

  private movies = this.getMovies().subscribe( data => {
    console.log(data)
    console.log(process.env['TOKEN'])
    this.movie = data[0].title
  })
  
}
