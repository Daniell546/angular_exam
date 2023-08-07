import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { PropertyRoutingModule } from './property-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ],
  exports: [CreateComponent],
})
export class PropertyModule {}
