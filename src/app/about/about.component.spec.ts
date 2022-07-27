import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing inline styles
  it('should have h2 with yellow bgColor', () => {
    const aboutCompHTML = fixture.nativeElement as HTMLElement;
    const bgColor = aboutCompHTML.querySelector('h2')?.style.backgroundColor;
    //expect(bgColor).toBe('red'); // not recommended if you use color code
    expect(bgColor).toBe('rgb(255, 0, 0)');
  });

  // TODO: Testing css class 'myPara' in a <p> tag
  


});
