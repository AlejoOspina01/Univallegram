import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../servicios/youtube.service';
import {Video} from '../models/youtube.models';
import {ActivatedRoute} from '@angular/router';
import { AngularFireAuth }from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private youtubeService:YoutubeService,public route:ActivatedRoute,public auth: AngularFireAuth) { }
  videos: Video[] = [];
  ngOnInit(): void {
    this.youtubeService.getVideos()
    .subscribe(resp=>{
      this.videos.push(...resp);
      console.log(this.videos);
    })
  }

}
