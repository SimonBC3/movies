import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { last } from 'rxjs';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.movieInfo = this.activatedRoute.snapshot.params
    console.log(this.movieInfo)

    this.apiService.getImages(this.movieInfo.id).subscribe(data => {
      this.movieImages = data.backdrops
      this.getImageByAspectRatio(this.movieImages)
    })

    this.apiService.getById(this.movieInfo.id).subscribe(data => {
      console.log(data)
      this.movieInfo = data
      this.updateLanguages(data.spoken_languages)
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
