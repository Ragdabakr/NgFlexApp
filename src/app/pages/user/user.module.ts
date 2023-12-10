import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
  CommonModule,
    UserRoutingModule,
    ServicesModule,
    ComponentsModule,
    RouterModule.forChild([{path: '', component: UserComponent}]),
  ]
})
export class UserModule { }
