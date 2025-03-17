import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validAuthorName(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const hasNumeric = /[0-9]+/.test(value);
    return hasNumeric ? { invalidAuthor : true }: null;
  }
}
