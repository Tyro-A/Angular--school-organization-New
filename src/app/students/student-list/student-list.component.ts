import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {Student} from './../../shared/student.model';
import { UserService} from './../../shared/user.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public service: UserService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshStudList();
  }
  populateForm(pd: Student){
    this.service.StudformData = Object.assign({}, pd);
  }

  onDelete(id: Student) : void {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteStudentDetail(id)
        .subscribe(res => {
          this.service.refreshStudList();
          this.toastr.error('Deleted successfully');
        },
          err => {
            console.log(err);
            this.toastr.warning('Not Deleted');
          })
    }
  
  }


  
  

}
