import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Approach #1: [RECOMMENDED]
  it('should have two elements in userList array - approach #1', fakeAsync(() => {
    component.ngOnInit();
    tick(4001);
    expect(component.userList.length).toEqual(2);
    expect(component.isLoading).toBeFalse();
  }));

  // Approach #2: 
  it('should have two elements in userList array - approach #2', ((done: DoneFn) => {
    component.ngOnInit();
    setTimeout( () => {
      expect(component.userList.length).toEqual(2);
      done();
    }, 4001);
  }));


});
