import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
