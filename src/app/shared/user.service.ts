import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from './organization.model';
import { Student } from './student.model';

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
  readonly rootURI = 'https://localhost:44382/api';



  // For Login and register
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Role: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup): void {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register(){
    const body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Role: this.formModel.value.Role,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.rootURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.rootURI + '/ApplicationUser/Login', formData);
  }

  // Home

  getUserProfile() {
    return this.http.get(this.rootURI + '/UserProfile');
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  // Organization Functions
  postOrganizationDetail() {
    return this.http.post(this.rootURI + '/Organizations', this.OrgformData);
  }
  putOrganizationDetail() {
    return this.http.put(this.rootURI + '/Organizations/' + this.OrgformData.organizationId, this.OrgformData);
  }
  deleteOrganizationDetail(orgId) {
    return this.http.delete(this.rootURI + '/Organizations/' + orgId);
  }

  refreshOrgList() {
    this.http.get(this.rootURI + '/Organizations')
      .toPromise()
      .then(res => this.Orglist = res as Organization[]);
  }




  // Displays Details for organization
  getOrganizationDetails() {
    return this.http.get(this.rootURI + '/Organizations');
  }

  refreshStudListInOrg(OrgId): void {
    this.http.get(this.rootURI + '/Organizations' + OrgId)
      .toPromise()
      .then(res => this.StudlistperOrg = res as Student[]);
  }

  getOrganizationId(organizationId): void {
    this.http.get(this.rootURI + '/Organizations/' + organizationId + '/Students')
      .toPromise()
      .then(res => this.StudlistperOrg = res as Student[]);
  }



  //Students Functions
  postStudentDetail() {
    return this.http.post(this.rootURI + '/Students', this.StudformData);
  }
  putStudentDetail() {
    return this.http.put(this.rootURI + '/Students/' + this.StudformData.id, this.StudformData);
  }
  deleteStudentDetail(StudentId) {
    return this.http.delete(this.rootURI + '/Students/' + StudentId);
  }

  refreshStudList(): void {
    this.http.get(this.rootURI + '/Students')
      .toPromise()
      .then(res => this.Studlist = res as Student[]);
  }

  refreshStudInOrganizationList(orgId: number): void {
    this.http.get(this.rootURI + '/Organizations/' + orgId + '/students')
      .toPromise()
      .then(res => this.Studlist = res as Student[]);
  }
}
