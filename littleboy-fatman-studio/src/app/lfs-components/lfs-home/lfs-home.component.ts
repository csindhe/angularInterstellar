import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/lfs-services/common.service';
import { comments } from 'src/app/lfs-data/lfs-data-model';

@Component({
  selector: 'app-lfs-home',
  templateUrl: './lfs-home.component.html',
  styleUrls: ['./lfs-home.component.scss']
})
export class LfsHomeComponent implements OnInit {
  
  constructor(private http: CommonService) { }

  ngOnInit() {
    /*this.http.getComments().subscribe((data: comments[]) => {
      console.log(data);
    });*/
  }

}
