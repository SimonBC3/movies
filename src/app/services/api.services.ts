import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiAnswer } from "src/models/apiAnswer.interface";
import { ImageAnswer } from "src/models/imageAnswer.interface";
import { MovieInfo } from "src/models/movieInfo.interface";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private moviesUrl: string = "https://api.themoviedb.org/3"
    private discoverUrl: string = "/discover/movie"
    private searchMovieUrl: string = "/search/movie"
    private idUrl: string = "/movie/"
    private token:string = "?api_key=adf9ace52556c56fcb0427073575519e"
    
    constructor(private http:HttpClient) {}

    public getMovies():Observable<apiAnswer> {
        return this.http.get<apiAnswer>(this.moviesUrl + this.discoverUrl + this.token)
    }

    public getByMovieTitle(keyword: string):Observable<apiAnswer> {
        if( typeof keyword == 'string' &&  !isNaN(parseInt(keyword))) {
            throw new Error('keyword must be a string')
        }        
        return this.http.get<apiAnswer>(this.moviesUrl + this.searchMovieUrl + this.token + `&query=${keyword}`)
    }

    public getById(id: number): Observable<MovieInfo> {
        return this.http.get<MovieInfo>(this.moviesUrl + `/movie/${id}` + this.token)
    }

    public getImages(id:number) {
        return this.http.get<ImageAnswer>(this.moviesUrl + `/movie/${id}/images` + this.token)
    }
}