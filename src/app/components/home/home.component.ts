import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../servicios/youtube.service';
import {Video} from '../models/youtube.models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private youtubeService:YoutubeService) { }
  videos: Video[] = [];
  ngOnInit(): void {
    this.youtubeService.getVideos()
    .subscribe(resp=>{
      this.videos.push(...resp);
      console.log(this.videos);
    })
  }

}
