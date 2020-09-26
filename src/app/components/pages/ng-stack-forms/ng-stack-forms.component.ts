import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Control, Validators } from '@ng-stack/forms';
import { ExtractGroupValue, ValidationErrors } from '@ng-stack/forms/lib/types';

export interface TestFormModel {
  string: string;
  number: number;
  bool: boolean;
  array: Control<Array<string>>;
  controlArray: Array<number>;
  object: Control<object>;
  controlObject: object
}


@Component({
  selector: 'app-ng-stack-forms',
  templateUrl: './ng-stack-forms.component.html',
  styleUrls: ['./ng-stack-forms.component.scss']
})
export class NgStackFormsComponent implements OnInit {

  public formGroup = new FormGroup<TestFormModel>({
    string: new FormControl('Default string value' as string, [Validators.email, Validators.min(10)]),
    bool: new FormControl(false as boolean, Validators.requiredTrue),
    array: new FormControl(['Test1', 12, 321] as Array<string>, Validators.maxLength(2)),
    controlArray: new FormArray([new FormControl(234)] as Array<FormControl<number>>),
    number: new FormControl(2 as number),
    object: new FormControl({} as object),
    controlObject: new FormGroup({} as object)
  })

  constructor() { }

  ngOnInit() {
  }


  formValue(): ExtractGroupValue<TestFormModel> {
    return this.formGroup.value;
  }


  addControl(): void {
    this.formGroup.controls.controlArray.push(new FormControl(23 as number))
  }


  get formErrors(): Array<string> {
    return this.getFormValidationErrors(this.formGroup)
  }

  getFormValidationErrors(group: FormGroup): Array<string> {

    const errorDetailsArray: Array<string> = [];

    Object.keys(group.controls).forEach(key => {

      const controlErrors: ValidationErrors = group.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          errorDetailsArray.push('Key control: ' + key + ', keyError:' + keyError + ', err value: ', controlErrors[keyError])
        });
      }
    });

    return errorDetailsArray;
  }
}
