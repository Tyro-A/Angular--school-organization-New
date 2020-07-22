import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor(public service: UserService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service. refreshStudList();
  }

  onHome(): void {
    this.router.navigate(['/studentpanel']);
  }
  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
