import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Organization } from 'src/app/shared/organization.model';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-list-per-organization',
  templateUrl: './list-per-organization.component.html',
  styleUrls: ['./list-per-organization.component.css']
})
export class ListPerOrganizationComponent implements OnInit {

  data =" ";
  constructor(public service: UserService,  private toastr: ToastrService, private router: Router, private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.refreshStudInOrganizationList(this.arouter.snapshot.params.id);
    this.data = this.arouter.snapshot.params.id;
  }

}
