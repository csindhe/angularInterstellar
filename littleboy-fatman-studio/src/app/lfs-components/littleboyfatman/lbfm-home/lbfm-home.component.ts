import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/lfs-data/lfs-data-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lbfm-home',
  templateUrl: './lbfm-home.component.html',
  styleUrls: ['./lbfm-home.component.scss']
})
export class LbfmHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {movieData: movie[]}) => {
      console.log(data.movieData);
    });
  }

}
