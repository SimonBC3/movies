import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieInfo } from 'src/models/movieInfo.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  movieInfo?: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.movieInfo = this.activatedRoute.snapshot.params
  }

}