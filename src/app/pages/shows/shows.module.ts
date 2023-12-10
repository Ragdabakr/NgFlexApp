import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsRoutingModule } from './shows-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { CarouselModule } from 'primeng/carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsComponent } from './shows.component';
import { ServicesModule } from 'src/app/services/services.module';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [ShowsListComponent,ShowDetailsComponent, ShowsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ShowsRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    ServicesModule,
    TabViewModule,
    RouterModule.forChild([{path: '', component: ShowsComponent}]),
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ShowsModule { }
