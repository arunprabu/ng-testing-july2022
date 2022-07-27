// Write test cases here 

// Test Pattern: Given/When/Then
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // Taking up the comp for testing 

// a group of related test spec - TEST SUITE
describe('AppComponent', () => {
  // will be called before each it block
  beforeEach(async () => {
    // similar to app module
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test spec #1
  it('should create the app', () => {
    // we load the component into the testbed
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;// taking up an object of comp class for testing 
    // expect and toBeTruthy() from jasmine 
    expect(app).toBeTruthy();
  });

  // test spec 
  it(`should have as title 'My Unit Testing App!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('My Unit Testing App!');
  });

  // test spec 
  it('should render title in h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger a change detection cycle for the component. -- detects changes in html
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to My Unit Testing App!');
  });

  it('should have appName as Angular Unit Testing Demo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.appName).toEqual('Angular Unit Testing Demo');
  });

  it('should have a text Happily built in July 2022', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const appCompHTML = fixture.nativeElement as HTMLElement;
    expect(appCompHTML.querySelector('p')?.textContent).toBe('Happily built in July 2022');
  });
});

