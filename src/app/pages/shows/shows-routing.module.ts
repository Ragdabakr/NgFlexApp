import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsComponent } from './shows.component';

const routes: Routes = [
  {
    path:'',
    component:ShowsComponent
  },
  {
    path:'list/:type',
    component: ShowsListComponent 
  },
  {
    path:'details/:id/:type',
    component:ShowDetailsComponent
  },
];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
