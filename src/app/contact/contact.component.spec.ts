import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    // similar to app module
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // let's test valid form 
  it('has valid form with all fields are properly filled', () => {
    component.contactForm?.controls['name'].setValue('John');
    component.contactForm?.controls['phone'].setValue('1234567890');
    component.contactForm?.controls['email'].setValue('j@k.com');
    expect(component.contactForm.valid).toBeTrue();
  });

  // negative test spec
  it('has invalid form with all fields are not properly filled', () => {
    component.contactForm?.controls['name'].setValue('');
    component.contactForm?.controls['phone'].setValue('123');
    component.contactForm?.controls['email'].setValue('j');
    expect(component.contactForm.valid).toBeFalse();
  });

});
