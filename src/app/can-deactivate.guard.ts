import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ModalServiceService } from './modal-service.service';
import { ConfirmationComponent } from './confirmation.component';

export interface ComponentCanDeactivate {
  canDeactivate(): boolean | Observable<boolean>;
}

export const CanDeactivateState = {
  defendAgainstBrowserBackButton: false,
};

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<ComponentCanDeactivate>
{
  constructor(readonly matDialog: MatDialog, private modalServiceService:ModalServiceService) {}

  canDeactivate(
    component: ComponentCanDeactivate
  ): boolean | Observable<boolean> {
    this.modalServiceService.navigateAwaySelection.next(false);

    if(component.canDeactivate()){
      history.pushState(null, '', '');
      return true;
    }
    else {
      return this.dialougSelection();
    }
      
    
  }

  dialougSelection():Observable<boolean>{
    debugger;
    this.modalServiceService.displayModal.next(true);
    return this.modalServiceService.navigateAwaySelection;
    
  }
}
