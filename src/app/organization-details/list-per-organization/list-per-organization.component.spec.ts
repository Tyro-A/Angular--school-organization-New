import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerOrganizationComponent } from './list-per-organization.component';

describe('ListPerOrganizationComponent', () => {
  let component: ListPerOrganizationComponent;
  let fixture: ComponentFixture<ListPerOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPerOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPerOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
