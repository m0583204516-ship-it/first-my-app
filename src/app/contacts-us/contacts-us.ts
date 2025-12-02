import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-contacts-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contacts-us.html',
  styleUrl: './contacts-us.css'
})
export class ContactsUs {
  @Output() closeForm = new EventEmitter<void>();
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl('')
  })
  onSubmit(){
    this.closeForm.emit();
  }
  cencel(){
    this.closeForm.emit();
  }
}
