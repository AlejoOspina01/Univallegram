import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Mensaje } from '../models/mensaje.interface'; 
import {map} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

	private itemsCollection:AngularFirestoreCollection<Mensaje>;
	public chats:Mensaje[]=[];
  public usuario:any={};


  constructor(private afs:AngularFirestore,public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user=>{
      console.log('Estado del usuario: ', user );
      if(!user){
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
      this.usuario.photoURL = user.photoURL;
    });
   }

  cargarMensajes(){
  	this.itemsCollection = this.afs.collection<Mensaje>('chats',ref => ref.orderBy('fecha','desc').limit(5));
        return this.itemsCollection.valueChanges().pipe(
      map(
        (mensajes:Mensaje[])=>{
          this.chats = [];
          for(let mensaje of mensajes){
            this.chats.unshift(mensaje);
          }
          return this.chats;
        }));
  }

  agregarMensaje(texto:string){
    console.log(this.usuario);
  	let mensaje: Mensaje = {
  		nombre: this.usuario.nombre,
  		mensaje: texto,
  		fecha : new Date().getTime(),
      userid : this.usuario.uid,
      linkimg : this.usuario.photoURL
  	}
  	return this.itemsCollection.add(mensaje);
  }
}
