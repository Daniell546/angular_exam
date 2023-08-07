import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { AppImageDirective } from './validators/app-image.directive';
import { AppPriceDirective } from './validators/app-price.directive';



@NgModule({
  declarations: [
    AppEmailDirective,
    AppImageDirective,
    AppPriceDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppEmailDirective,
    AppImageDirective,
    AppPriceDirective
  ]
})
export class SharedModule { }
