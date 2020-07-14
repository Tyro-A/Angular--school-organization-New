import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Organization } from './organization.model';
import {Student} from './student.model'
import { from } from 'rxjs';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  StudlistperOrg: Student[];

  StudformData: Student;
  Studlist: Student[];
  OrgformData: Organization;
  Orglist: Organization[];

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44382/api';



  ///For Login and register
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

// Home

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }

//Organization Functions


postOrganizationDetail() {
  return this.http.post(this.BaseURI + '/Organizations', this.OrgformData);
}
putOrganizationDetail() {
  return this.http.put(this.BaseURI + '/Organizations/'+ this.OrgformData.organizationId, this.OrgformData);
}
deleteOrganizationDetail(orgId) {
  return this.http.delete(this.BaseURI + '/Organizations/' +orgId);
}

refreshOrgList(){
  this.http.get(this.BaseURI + '/Organizations')
  .toPromise()
  .then(res => this.Orglist = res as Organization[]);
}





//Displays Details for organization
getOrganizationDetails() {
  return this.http.get(this.BaseURI + '/Organizations');
}

refreshStudListInOrg(){
  this.http.get(this.BaseURI + '/Organizations')
  .toPromise()
  .then(res => this.StudlistperOrg = res as Student[]);
}

getOrganizationId(organizationId){
  this.http.get(this.BaseURI +'/Organizations/' +organizationId + '/Students')
  .toPromise()
  .then(res => this.StudlistperOrg = res as Student[]) ;
}



//Students Functions
postStudentDetail() {
  return this.http.post(this.BaseURI + '/Students', this.StudformData);
}
putStudentDetail() {
  return this.http.put(this.BaseURI + '/Students/'+ this.StudformData.id, this.StudformData);
}
deleteStudentDetail(StudentId) {
  return this.http.delete(this.BaseURI + '/Students/' +StudentId);
}

refreshStudList(){
  this.http.get(this.BaseURI + '/Students')
  .toPromise()
  .then(res => this.Studlist = res as Student[]);
}





}
