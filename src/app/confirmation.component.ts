import { Component } from '@angular/core';
//import { MatDialogRef } from '@angular/material/dialog';
import { ModalServiceService } from './modal-service.service';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <div >You have unsaved changes</div>
    <div>
      What would you like to do?
    </div>
    <div>
      <button (click)="onClickCancel()">STAY ON FORM</button>
      <button class="confirm-button" color="warn" (click)="onClickConfirm()">LEAVE WITHOUT SAVING</button>
    </div>
  `,
})
export class ConfirmationComponent {
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    this.modalServiceService.displayModal.next(false);
  }

  constructor(
    //private readonly dialogRef: MatDialogRef<ConfirmationComponent, boolean>,
    public modalServiceService:ModalServiceService
  ) {
  }

  onClickCancel() {
    this.modalServiceService.navigateAwaySelection.next(false);
    this.modalServiceService.displayModal.next(false);
  }

  onClickConfirm() {
    this.modalServiceService.navigateAwaySelection.next(true);
    this.modalServiceService.displayModal.next(false);
  }

  

}
