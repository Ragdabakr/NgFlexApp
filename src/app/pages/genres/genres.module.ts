import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresRoutingModule } from './genres-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GenresRoutingModule,
    SharedModule,
    ServicesModule,
    RouterModule.forChild([{path: '', component: GenresModule}]),
  ]
})
export class GenresModule { }
