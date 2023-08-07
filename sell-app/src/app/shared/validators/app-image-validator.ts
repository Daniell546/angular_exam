import { ValidatorFn } from "@angular/forms";

export function appImageValidator(protocols: string[]): ValidatorFn {

    const protocolsStrings = protocols.join('|')

    const regEx = new RegExp(`^((${protocolsStrings}):\/\/)`)
    return (control) => {
        return control.value === "" || regEx.test(control.value) ? null : {appImageValidator: true}
    }
}