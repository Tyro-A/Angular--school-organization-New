import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: '',
    Role: '',
  };
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.router.navigateByUrl('/user/login');
    }
  }

  onSubmit(form: NgForm): void {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        if (this.formModel.Role == 'Admin'){
          this.router.navigateByUrl('/adminpanel');
        }
        else if (this.formModel.Role == 'Student'){
          this.router.navigateByUrl('/studentpanel');
        }else{
          this.router.navigateByUrl('/forbidden');
        }

      },
      err => {
        if (err.status === 400){
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else{
          console.log(err);
        }
      }
    );
  }
}
