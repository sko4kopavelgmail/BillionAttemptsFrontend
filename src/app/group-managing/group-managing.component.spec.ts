import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupManagingComponent } from './group-managing.component';

describe('GroupManagingComponent', () => {
  let component: GroupManagingComponent;
  let fixture: ComponentFixture<GroupManagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupManagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupManagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
