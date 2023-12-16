import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsComponent } from './shows.component';
import { IsAuthenticatedGuard } from 'src/app/shared/is-authenticated.guard';

const routes: Routes = [
  {
    path:'',
    canActivate:[IsAuthenticatedGuard],
    component:ShowsComponent
  },
  {
    path:'list/:type',
    canActivate:[IsAuthenticatedGuard],
    component: ShowsListComponent 
  },
  {
    path:'details/:id/:type',
    canActivate:[IsAuthenticatedGuard],
    component:ShowDetailsComponent
  },
];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
