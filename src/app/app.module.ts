import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OrganizationComponent } from './home/organization/organization.component';
import { OrganizationListComponent } from './home/organization-list/organization-list.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { ListPerOrganizationComponent } from './organization-details/list-per-organization/list-per-organization.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { StudentOrganizationListComponent } from './home/student-organization-list/student-organization-list.component';
import { StudentInformationComponent } from './home/student-information/student-information.component';
import { StudentsListComponent } from './home/students-list/students-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    OrganizationComponent,
    OrganizationListComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    OrganizationDetailsComponent,
    ListPerOrganizationComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    StudentOrganizationListComponent,
    StudentInformationComponent,
    StudentsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
