import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers properly', () => {
    // sometimes multiple expectations are needed
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(5, 2)).toEqual(7);
  });

  it('should add and have return type number', ()=> {
    expect(component.add(10, 20)).not.toBeNaN();
  });
});
