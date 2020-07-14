import { UserService } from './../../shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null){
      form.form.reset();
    }
    this.service.OrgformData = {
      organizationId : 0,
      name: '',
      subject: '',
      adviser: '',
    };
  }

  onSubmit(form: NgForm): void{
    if (this.service.OrgformData.organizationId === 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm): void {
    this.service.postOrganizationDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Added successfully');
        this.service.refreshOrgList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm): void {
    this.service.putOrganizationDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'New Record Updated');
        this.service.refreshOrgList();
      },
      err => {
        this.toastr.warning('Record is not updated');
        console.log(err);
      }
    )
  }


}
