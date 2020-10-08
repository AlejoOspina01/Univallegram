import { Component, OnInit } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { YoutubeService } from '../../servicios/youtube.service';
import {Video} from '../../models/youtube.models';
import {ChatService} from '../../servicios/chat.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit{

	mensaje = "";
  	elemento:any;
  	id:any;
  	url:any;
	videos: Video[] = [];
	videoSel: Video;

  constructor(public auth: AngularFireAuth,public chatservice:ChatService,
  	route: ActivatedRoute,private domSanitizer: DomSanitizer,
  	private youtubeService:YoutubeService) {
  	route.params.subscribe(params => {
   	this.id = params.id;
	});
	this.url = "https://www.youtube.com/embed/" + this.id;
  	this.chatservice.cargarMensajes().subscribe(()=>{
      setTimeout(()=>{
        this.elemento.scrollTop= this.elemento.scrollHeight;
      },20)
    });
   }

	 ngOnInit(){
	    this.elemento = document.getElementById('app-mensajes');
	        this.youtubeService.getVideos()
		    .subscribe(resp=>{
		      this.videos.push(...resp);
		      for (var i = 0; i < resp.length; i++) {
		      	if(this.id == resp[i].resourceId.videoId){
		      		this.videoSel = resp[i];
		      	}
		      }
		    });
	  }

	  videoUrl(id:any) {
	    return "https://www.youtube.com/embed/" + id;
	  }

	  enviarMensaje(){
	    // this.chatservice.agregarMensaje(mensaje).subscribe();
	  	console.log(this.mensaje);

	    if(this.mensaje.length === 0){
	      return;
	    }else{
	      this.chatservice.agregarMensaje(this.mensaje)
	      .then(()=>this.mensaje="")
	      .catch((err)=>console.error('Error al enviar',err));
	    }
	  }

}
