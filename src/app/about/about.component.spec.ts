import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
  
  // counter value defaults to 0
  it('has default counter value 0', () => {
    expect(component.counterValue).toEqual(0);
  });

  it('should increment counter value', () => {
    component.handleIncrement(); // calling method
    expect(component.counterValue).toEqual(1);

    component.handleDecrement(); // calling method
    expect(component.counterValue).toEqual(0);
  });

  // Handling events thru html 
  it('should increment value in html template', () => {
    fixture.debugElement.query(By.css('.incrementBtn')).triggerEventHandler('click', null);
    
    // to detect the changes in html
    fixture.detectChanges();
    const cValue = fixture.debugElement.query(By.css('.counterTxt')).nativeElement.innerText;
    expect(cValue).toEqual('1');
  });

  // TODO: should decrement value in html template

  it('should stop at 10 and show Maximum Reached upon increment', () => {
    component.counterValue = 10;
    fixture.debugElement.query(By.css('.incrementBtn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const cValue = fixture.debugElement.query(By.css('.counterTxt')).nativeElement.innerText;
    expect(cValue).toEqual('10');

    const msg = fixture.debugElement.query(By.css('.counterInfoEl')).nativeElement.innerText;
    expect(msg).toEqual('Maximum Reached');
  });

  // TODO: should stop at 0 and show Minimum Reached upon decrement
  

});
