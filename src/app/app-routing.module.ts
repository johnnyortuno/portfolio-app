import { VigilanteGuard } from './vigilante.guard';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { ListViewsComponent } from './list-views/list-views.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'post/:variable',
    component: PostDetailComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'list-videos',
    component: ListViewsComponent,
     canActivate:[VigilanteGuard]
    
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
