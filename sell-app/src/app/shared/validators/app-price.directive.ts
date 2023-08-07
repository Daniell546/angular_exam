import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appPriceValidator } from './app-price-validator';

@Directive({
  selector: '[appPrice]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppPriceDirective,
      multi: true,
    },
  ],
})
export class AppPriceDirective implements Validator, OnChanges {

  @Input() appPrice: string = '';

  validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.validator(control);
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes['appPrice'];

    if (currentEmailChanges) {
      this.validator = appPriceValidator();
    }
  }

}
