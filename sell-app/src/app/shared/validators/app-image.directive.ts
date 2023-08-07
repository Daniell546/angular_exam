import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { appImageValidator } from './app-image-validator';

@Directive({
  selector: '[appImage]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppImageDirective,
      multi: true,
    },
  ],
})
export class AppImageDirective implements Validator, OnChanges {
  @Input() appImage: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.validator(control);
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes['appImage'];

    if (currentEmailChanges) {
      this.validator = appImageValidator(currentEmailChanges.currentValue);
    }
  }
}
