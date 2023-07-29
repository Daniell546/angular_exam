import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { PropertyRoutingModule } from './property-routing.module';



@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    RouterModule
  ],
  exports: [
    CreateComponent,
  ]
})
export class PropertyModule { }
