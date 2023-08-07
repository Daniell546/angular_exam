import { ValidatorFn } from "@angular/forms";

export function appPriceValidator(): ValidatorFn {
    return (control) => {
        return control.value > 0  ? null : {appPriceValidator: true}
    }
}