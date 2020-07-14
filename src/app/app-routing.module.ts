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

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard],
    children: [
     { path: 'organization', component: OrganizationComponent },
     { path: 'organization-list', component: OrganizationListComponent }
   ]
},
  {path: 'students', component: StudentsComponent, canActivate:[AuthGuard] },

  {path: 'organization-details', component: OrganizationDetailsComponent, canActivate:[AuthGuard] },
  
  { path: 'organization-list/:id', component: OrganizationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ OrganizationListComponent ]
