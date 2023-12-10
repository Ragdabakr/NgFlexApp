import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { VideoEmbedComponent } from './video-embed/video-embed.component';
import { ButtonModule } from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../services/services.module';


@NgModule({
  declarations: [
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    VideoEmbedComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ServicesModule

  ],exports:[
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    VideoEmbedComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ComponentsModule { }
