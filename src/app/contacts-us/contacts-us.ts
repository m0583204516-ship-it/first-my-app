import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
@Component({
  selector: 'app-contacts-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contacts-us.html',
  styleUrl: './contacts-us.css'
})
export class ContactsUs {
  @Output() closeForm = new EventEmitter<void>();
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(18)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl(''),
    subject: new FormControl('',[Validators.required, Validators.maxLength(50)])
  })
  onSubmit(){
   if(this.form.valid){
    console.log(this.form.value);
    this.form.reset();
    this.closeForm.emit();
   }
    else{
      this.form.markAllAsTouched();
    }
  }
  cencel(){
    this.form.reset();
    this.closeForm.emit();
  }

  //getters
  get name(){
    return this.form.get('name');
  }
  get nameRequired(){
    return this.name?.touched && this.name?.hasError('required');
  }
  get nameMaxLength(){
    return this.name?.touched && this.name?.hasError('maxlength');
  }
  get email(){
    return this.form.get('email');
  }
  get emailRequired(){
    return this.email?.touched && this.email?.hasError('required');
  }
  get emailInvalid(){
    return this.email?.touched && this.email?.hasError('email');
  }
  get subject(){
    return this.form.get('subject');
  }
  get subjectRequired(){
    return this.subject?.touched && this.subject?.hasError('required');
  }
  get subjectMaxLength(){
    return this.subject?.touched && this.subject?.hasError('maxlength');
  }
}
