import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './genres.component';
import { IsAuthenticatedGuard } from 'src/app/shared/is-authenticated.guard';

const routes: Routes = [
  { path: '', component: GenresComponent , canActivate:[IsAuthenticatedGuard],},
  { path: ':genreId', component: GenresComponent , canActivate:[IsAuthenticatedGuard],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
