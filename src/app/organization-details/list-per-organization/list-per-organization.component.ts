import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-per-organization',
  templateUrl: './list-per-organization.component.html',
  styleUrls: ['./list-per-organization.component.css']
})
export class ListPerOrganizationComponent implements OnInit {

  constructor(public service : UserService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshStudListInOrg() ;
  }

}
