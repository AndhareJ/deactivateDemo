import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ComponentCanDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-user-detail',
  template: `
    User Detail Page
    User Detail Page
    <form #form="ngForm" [formGroup]="formGroup" style="display: flex; flex-direction: column;">
      <input type="text" name="name" formControlName="name" placeholder="enter text here, and click the back button" />
        
      <button  type="submit">Submit</button>
      <button  (click)="prevStep()" type="button">Back</button>
    </form>
  `,
})
export class UserDetailComponent implements ComponentCanDeactivate {
  readonly formGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
  });
  
  constructor(private router: Router, readonly formBuilder: FormBuilder) {
       
     }
  @ViewChild('form') form: any;

  canDeactivate() {
    return !this.formGroup.dirty || this.form.submitted;
  }

  public prevStep() {
    // location.href = '/user-list';
    //history.pushState(null, null, location.href);
    //this.router.navigate(['/user-list']);
    debugger;
    location.href = '#/user-list';
  }
}
