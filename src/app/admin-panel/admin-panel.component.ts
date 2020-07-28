import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styles: [
  ]
})
export class AdminPanelComponent implements OnInit {
  userDetails;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  onStudent(): void{
    this.router.navigate(['/addstudents']);
  }



}
