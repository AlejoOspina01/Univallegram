import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewVideoComponent } from './components/video/view-video/view-video.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'viewvideo/:id',component: ViewVideoComponent},
  {path:'**',component:HomeComponent},
  {path: '',pathMatch: 'full',redirectTo: 'home'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
