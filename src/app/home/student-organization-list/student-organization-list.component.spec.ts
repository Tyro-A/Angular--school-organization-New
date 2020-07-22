import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrganizationListComponent } from './student-organization-list.component';

describe('StudentOrganizationListComponent', () => {
  let component: StudentOrganizationListComponent;
  let fixture: ComponentFixture<StudentOrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOrganizationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
