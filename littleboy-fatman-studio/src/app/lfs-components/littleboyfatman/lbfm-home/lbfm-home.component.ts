import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/lfs-data/lfs-data-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lbfm-home',
  templateUrl: './lbfm-home.component.html',
  styleUrls: ['./lbfm-home.component.scss']
})
export class LbfmHomeComponent implements OnInit {
  movieData: movie[];
  arr = Array;
  starData: string[] = [];

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.data.subscribe((data: {movieData: movie[]}) => {
      this.movieData = data.movieData;
    });
  }

  setImageStyle(movie: movie): any {
    let styles = {
      'background-image': 'url("' + movie.poster + '")'
    };
    this.calculateTotalStar(movie);
    return styles;
  }

  calculateTotalStar(movie: movie): void {
    this.starData = [];
    let fullStars: number = 0;
    let halfStars: number= 0;
    let noStars: number = 0;
    let totalStars: number = 5;
    let remainingStars: number = 0;
    let currentRating: number = movie.imdb.rating;
    let ratingRemainder: number = movie.imdb.rating % 2;
    
    fullStars = (currentRating - ratingRemainder) / 2;
    remainingStars = totalStars - fullStars;
    (ratingRemainder >= 1) ? halfStars = 1 : noStars = remainingStars;
    for(let i = 0; i < fullStars; i++) {
      this.starData.push('full');
    }
    for(let i = 0; i < halfStars; i++) {
      this.starData.push('half');
    }
    for(let i = 0; i < noStars; i++) {
      this.starData.push('zero');
    }
  }

}
