import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {

    /**Pass the Form Control Names to match */
    static MustMath(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }
}