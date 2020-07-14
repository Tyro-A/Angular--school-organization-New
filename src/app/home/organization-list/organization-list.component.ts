import {Organization} from './../../shared/organization.model';
import { UserService} from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  constructor( public service : UserService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshOrgList() ;
  }

  populateForm(pd: Organization) : void {
    this.service.OrgformData=pd;
  }

  onDelete(organizationId : Organization) : void {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteOrganizationDetail(organizationId)
        .subscribe(res => {
          this.service.refreshOrgList();
          this.toastr.error('Deleted successfully');
        },
          err => {
            console.log(err);
            this.toastr.warning('Ooops record is not deleted')
          })
    }else{
      
    }
  
  }
  onView(o :Organization) :void {
  this.router.navigateByUrl('/organization-details');

  }

}


