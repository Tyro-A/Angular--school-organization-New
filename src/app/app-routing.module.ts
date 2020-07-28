import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { OrganizationComponent } from './home/organization/organization.component';
import { OrganizationListComponent } from './home/organization-list/organization-list.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentsListComponent } from './home/students-list/students-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  { path: 'studentpanel', component: HomeComponent, canActivate: [ AuthGuard ], data: {permittedRoles: ['Student']} },

  {path: 'organization', component: OrganizationComponent},

  {path: 'organization-list', component: OrganizationListComponent},

  {path: 'addstudents', component: StudentsComponent, canActivate: [ AuthGuard ] },

  {path: 'organization-details/:id', component: OrganizationDetailsComponent, canActivate: [ AuthGuard ] },

  {path: 'organization-details', component: OrganizationDetailsComponent, canActivate: [ AuthGuard ] },

  { path: 'organization-list/:id', component: OrganizationListComponent},

  {path: 'forbidden', component: ForbiddenComponent},

  {path: 'studentList', component: StudentsListComponent},

  {path: 'adminpanel', component: AdminPanelComponent, canActivate: [ AuthGuard ], data: {permittedRoles: ['Admin']} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ OrganizationListComponent ];
