import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieInfo } from "src/models/movieInfo.interface";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private moviesUrl:string = "https://api.themoviedb.org/3/discover/movie?api_key="

    constructor(private http:HttpClient) {}

    getMovies():Observable<any> {
        return this.http.get(this.moviesUrl)
    }
}