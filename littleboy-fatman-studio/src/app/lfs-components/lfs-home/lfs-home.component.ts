import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/lfs-services/common.service';

@Component({
  selector: 'app-lfs-home',
  templateUrl: './lfs-home.component.html',
  styleUrls: ['./lfs-home.component.scss']
})
export class LfsHomeComponent implements OnInit {

  constructor(private httpService: CommonService) { }

  ngOnInit() {
    console.log(this.httpService.getUser());
  }

}
