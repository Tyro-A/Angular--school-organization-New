import { Organization } from './../../shared/organization.model';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-organization-list',
  templateUrl: './student-organization-list.component.html',
  styleUrls: ['./student-organization-list.component.css']
})
export class StudentOrganizationListComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshOrgList();
  }

}
