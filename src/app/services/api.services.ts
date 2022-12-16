import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiAnswer } from "src/models/apiAnswer.interface";
import { MovieInfo } from "src/models/movieInfo.interface";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private moviesUrl: string = "https://api.themoviedb.org/3"
    private discoverUrl: string = "/discover/movie"
    private searchMovieUrl: string = "/search/movie"
    private idUrl: string = "/movie/"
    private token:string = "?api_key="
    
    constructor(private http:HttpClient) {}

    public getMovies():Observable<apiAnswer> {
        return this.http.get<apiAnswer>(this.moviesUrl + this.discoverUrl + this.token)
    }

    public getByMovieTitle(keyword: string):Observable<apiAnswer> {
        if( typeof keyword == 'string' &&  !isNaN(parseInt(keyword))) {
            throw new Error('keyword must be a string')
        }        
        let keywordQuery: string  = "&query=" + keyword
        return this.http.get<apiAnswer>(this.moviesUrl + this.searchMovieUrl + this.token + keywordQuery)
    }

    public getById(id: number): Observable<MovieInfo> {
        console.log(this.moviesUrl + this.idUrl + id + this.token)
        return this.http.get<MovieInfo>(this.moviesUrl + this.idUrl + id + this.token)
    }
}