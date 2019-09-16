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
    return styles;
  }

  calculateFullStars(movie: movie): any {
    let movieRating: number = movie.tomatoes.viewer.rating;
    let interimVal = Math.round(movieRating);
    let finalValue = (interimVal > movieRating) ? ((interimVal - movieRating) === 0.5) ? (movieRating - 0.5) : interimVal : Math.round(movieRating);
    return finalValue;
  }

  calculateHalfStars(movie: movie): any {
    let movieRating: number = movie.tomatoes.viewer.rating;
    let ratingDiff: number = 5 - movieRating;
    let roundedDiff: number = Math.round(ratingDiff);
    let roundRateDiff = (roundedDiff > ratingDiff) ? (roundedDiff - ratingDiff) : (ratingDiff - roundedDiff);
    let decimalDiff = (roundedDiff > ratingDiff) ? (roundedDiff > 1) ? 1 : roundedDiff : 0;
    return decimalDiff; 
  }

  calculateBlankStars(movie: movie): any {
    let movieRating: number = movie.tomatoes.viewer.rating;
    let ratingDiff: number = 5 - movieRating;
    let roundedDiff: number = Math.round(ratingDiff);
    let decimalDiff = (roundedDiff > ratingDiff) ? (roundedDiff - ratingDiff) : (roundedDiff - ratingDiff);
    let finalValue: number = (decimalDiff < 0.5 && decimalDiff > 0) ? 0 : (decimalDiff < 1 && decimalDiff > 0.5) ? 0 : (decimalDiff === 0.5) ? 1 : roundedDiff;  
    return finalValue;
  }

}
