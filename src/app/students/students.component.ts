import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
organizationDetails;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    // this.service.getOrganizationDetails().subscribe(
    //   res => {
    //     this.organizationDetails = res;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    // );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  onHome() {
    this.router.navigate(['/home']);
  }



}
