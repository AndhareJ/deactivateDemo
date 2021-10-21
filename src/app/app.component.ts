import { Component } from '@angular/core';
import { CanDeactivateState } from './can-deactivate.guard';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { ModalServiceService } from './modal-service.service';

@Component({
  selector: 'app-root',
  template: `
    <app-confirmation-dialog *ngIf="display"></app-confirmation-dialog>
    <div >
      Angular Can Deactivate Demo
    </div>
    <div style="color: red; font-weight: bold;">
    NOTE! This demo will not function correctly within the stackblitz preview window.<br>
    To see it in action, rather click 'Open in New Window' on the top right.</div>
    <hr/>
    <br>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  display:boolean=false;
  constructor(
    readonly router: Router,private modalServiceService:ModalServiceService
  ) {
    // if the user clicks the back button, ask the CanDeactivateGuard to defend against this.
    window.onpopstate = () => CanDeactivateState.defendAgainstBrowserBackButton = true;

    // Upon successful navigation, ensure that the CanDeactivateGuard no longer defends against back button clicks
    router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(() => CanDeactivateState.defendAgainstBrowserBackButton = false)
    ).subscribe();
    
    this.modalServiceService.displayModal.subscribe((res)=>{
      this.display=res
   })
  }

}
