import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppEmailDirective,
    multi: true,
  }]
})
export class AppEmailDirective implements Validator, OnChanges {

  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;
  
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.validator(control);
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges):void {

    const currentEmailChanges = changes['appEmail'];
    
    if(currentEmailChanges) {
      console.log(currentEmailChanges);
      
      this.validator = appEmailValidator(currentEmailChanges.currentValue);
    }

  }

}
