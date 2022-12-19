import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.services';
import { Languages } from 'src/models/languages.interface';
import { MovieImages } from 'src/models/movieImages.interface';
import { MovieInfo } from 'src/models/movieInfo.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  moviePoster?: string;
  movieInfo?: any;
  movieId?: any;
  movieImages?: MovieImages[];
  movieImageUrl?: string;
  movieLanguages?: string;
  movieOverview?:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService, private location:Location) { }

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.params['id']

    this.apiService.getImages(this.movieId).subscribe(data => {
      this.movieImages = data.backdrops
      this.getImageByAspectRatio(this.movieImages)
    })

    this.apiService.getById(this.movieId).subscribe(data => {
      this.movieInfo = data
      console.log(data)
      this.movieOverview = data.overview
      this.updateLanguages(data.spoken_languages)
      this.moviePoster = `https://image.tmdb.org/t/p/w500${this.movieInfo.poster_path}`
    })
  }

  private getImageByAspectRatio(movieImages: MovieImages[]) {
    this.movieImageUrl = movieImages.find(image => image.aspect_ratio == 1.778)?.file_path
    this.moviePoster = `https://image.tmdb.org/t/p/w500${this.movieImageUrl}`
  }

  private updateLanguages(spoken_languages: Languages[]) {
    this.movieLanguages = ''
    spoken_languages.forEach(language => {
      if (spoken_languages.at(spoken_languages.length-1) != language) {
        this.movieLanguages += `${language.english_name}, `
      } else {
        this.movieLanguages += `${language.english_name} `
      }

    })
  }

}
