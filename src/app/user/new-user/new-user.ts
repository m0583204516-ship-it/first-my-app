import { Component,Output ,EventEmitter} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ReactiveFormsModule, FormArray } from '@angular/forms';


const  passwordsMatch=(group : AbstractControl)=>{
  const p = group.get('password')?.value;
  const c = group.get('confirmPassword')?.value;
  return p===c ? null : {mismatch: true}

}


@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {
  @Output() userAdded = new EventEmitter<any>();
  @Output() closeForm = new EventEmitter<void>();
  categories=["work","personal","urgent"];
  form = new FormGroup({   
    name:new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.maxLength(18)]),
      lastName: new FormControl('',[Validators.required, Validators.maxLength(18)]),
    }),  
    email: new FormControl('',[Validators.required, Validators.email]),
    passwords: new FormGroup({
      password: new FormControl('',[Validators.required, Validators.minLength(1)]),
      confirmPassword: new FormControl('',[Validators.required]), 
    },{validators : passwordsMatch}) ,

    categories: new FormArray(
      this.categories.map(()=> new FormControl(false))
    ),
  })

  onSubmit(){
    if(this.form.valid)
    {
      console.log(this.form);
      this.userAdded.emit(this.form.value);
      this.form.reset();
      this.closeForm.emit();
    }
    else
      this.form.markAllAsTouched();

  }
  closed(){
    this.closeForm.emit();
  }


//getters
  get name() : FormGroup {
    return this.form.controls.name;
  }
  get firstName(): AbstractControl {
    return this.name.controls['firstName'];
  }
  get lastName(): AbstractControl {
    return this.name.controls['lastName'];
  }
  get firstNameRequired(): boolean {
    return this.firstName.touched && this.firstName.hasError('required');
  }
  get firstNameMaxLength(): boolean {
    return this.firstName.touched && this.firstName.hasError('maxlength');
  }
  get lastNameRequired(): boolean {
    return this.lastName.touched && this.lastName.hasError('required');
  }
  get lastNameMaxLength(): boolean {
    return this.lastName.touched && this.lastName.hasError('maxlength');
  }
  get email(): AbstractControl {
    return this.form.controls['email'];
  }
  get emailRequired(): boolean {
   return this.email.touched && this.email.hasError('required');
  }
  get emailInvalid(): boolean {
    return this.email.touched && this.email.hasError('email');
  }
  get passwords(): FormGroup {
    return this.form.controls.passwords;
  }
  get password(): AbstractControl { 
    return this.passwords.controls['password'];
  }
  get passwordRequired(): boolean {
    return this.password.touched && this.password.hasError('required');
  }
  get passwordMinLength(): boolean {
    return this.password.touched && this.password.hasError('minlength');
  }
  get confirmPassword(): AbstractControl {
    return this.passwords.controls['confirmPassword'];
  }
  get confirmPasswordRequired(): boolean {
    return this.confirmPassword.touched && this.confirmPassword.hasError('required');
  }
  get passwordsMismatch(): boolean {
    return this.passwords.touched && this.passwords.hasError('mismatch');
  }
}
