import { Component, OnInit } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

}
