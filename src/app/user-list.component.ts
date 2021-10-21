import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <h4>User List Page</h4>
  <div>John</div>
  <div>Andrew</div>
  <div>Sam</div>
  <br>
  <a [routerLink]="['../user-detail']">Go To User Detail Page</a>
  `,
})
export class UserListComponent {
}
