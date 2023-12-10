import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'home',
    data: { pageTitle: 'Home Page' },
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shows',
    data: { pageTitle: 'Show Page' },
    loadChildren: () => import('./pages/shows/shows.module').then(m => m.ShowsModule)
  },
  {
    path: 'user',
    data: { pageTitle: 'User Page' },
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'genres',
    data: { pageTitle: 'Genres Page' },
    loadChildren: () => import('./pages/genres/genres.module').then(m => m.GenresModule)
  },
 {
  path: '',
  data: { pageTitle: 'Auth Page' },
  loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
 },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
