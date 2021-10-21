import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { UserDetailComponent } from './user-detail.component';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: 'user-detail',
    component: UserDetailComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: '**',
    redirectTo: 'user-list',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationComponent],
})
export class AppModule {}
