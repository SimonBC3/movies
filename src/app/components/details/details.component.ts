import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.services';
import { MovieImages } from 'src/models/movieImages.interface';
import { MovieInfo } from 'src/models/movieInfo.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  moviePoster?:string;
  movieInfo?: any;
  movieImages?: MovieImages[];
  movieImageUrl?: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService:ApiService) {}
  
  ngOnInit(): void {
    this.movieInfo = this.activatedRoute.snapshot.params

    
    this.apiService.getImages(this.movieInfo.id).subscribe(data => {
      this.movieImages = data.backdrops
      this.getImageByAspectRatio(this.movieImages)
    })
    
    
  }

  private getImageByAspectRatio(movieImages: MovieImages[]) {
    this.movieImageUrl = movieImages.find(image => image.aspect_ratio == 1.778)?.file_path
    this.moviePoster = `https://image.tmdb.org/t/p/w500${this.movieImageUrl}`
  }

}
