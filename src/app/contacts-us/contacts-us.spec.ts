import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUs } from './contacts-us';

describe('ContactsUs', () => {
  let component: ContactsUs;
  let fixture: ComponentFixture<ContactsUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
