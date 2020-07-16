import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  resetForm(form?: NgForm): void {
    if (form != null) {
      form.form.reset();
    }
    this.service.StudformData = {
      id: 0,
      firstName: '',
      lastName: '',
      yearLevel: null,
      course: '',
      organizationId: null
    };
  }
  onSubmit(form: NgForm): void {
    if (this.service.StudformData.id === 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm): void {
    this.service.postStudentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Added successfully');
        this.service.refreshStudList();
      },
      err => {
        this.toastr.warning('No record added check the input');
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm): void {
    this.service.putStudentDetail().subscribe(
      res => {
        this.toastr.info('Updated successfully');
        this.resetForm(form);
        this.service.refreshStudList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
