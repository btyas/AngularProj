import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     userSubmitted : boolean;
     user: any = {};
     registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private serviceUser : UserServiceService) { }

  ngOnInit(): void {
  //  this.registrationForm = new FormGroup({
  //    userName : new FormControl('Mark', Validators.required),
  //    email : new FormControl(null, [Validators.required, Validators.email]),
  //    password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //    confirmPassword : new FormControl(null, [Validators.required, Validators.minLength(10)]),
  //    mobile : new FormControl(null, [Validators.required, Validators.maxLength(8)])

   // }, this.passwordMatch);
      this.createRegistrationForm();

           }

   createRegistrationForm() {
     this.registrationForm = this.fb.group({
       userName : [null, Validators.required],
       email: [null, [Validators.required, Validators.email]],
       password : [null, [Validators.required, Validators.minLength((8))]],
       confirmPassword : [null, Validators.required],
       mobile : [null, [Validators.required, Validators.maxLength(10)]]
     }, {validators : this.passwordMatch} );
  }
  passwordMatch(fg: FormGroup): Validators{

      return fg.get('password').value === fg.get('confirmPassword').value ? null :
      {
        notmatched : true
      };
  }

   get userName() {
     return this.registrationForm.get('userName') as FormControl;
   }

   get email() {
     return this.registrationForm.get('email') as FormControl;
   }

   get password () {
      return this.registrationForm.get('password') as FormControl;
   }

   get confirmPassword() {
      return this.registrationForm.get('confirmPassword') as FormControl;
   }

   get mobile () {
     return this.registrationForm.get('mobile') as FormControl;
   }
  // tslint:disable-next-line: typedef
  onSubmit()
  {
    this.userSubmitted = false;
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.serviceUser.addUser(this.user);
    this.registrationForm.reset();
    this.userSubmitted = true;
  }

}
