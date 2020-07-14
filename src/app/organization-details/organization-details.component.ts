import { Organization } from './../shared/organization.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';


@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  constructor( public service : UserService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    
  }

  
  onStudent() {
    this.router.navigate(['/students']);
  }
  onHome() {
    this.router.navigate(['/home']);
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
