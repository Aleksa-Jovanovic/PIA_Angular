import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UserType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //* FormGroup is a class that ties different form controls together into signle unify form 
  myForm: FormGroup;

  //* FormBuilder is a service used for building forms
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Schema for data that holds actual values and validation rules for the fields inside your form 
    this.myForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      userType: ['', [
        Validators.required
      ]]
    })

    // Returns an observable -> emit the value of the form evry time it changes
    ////this.myForm.valueChanges.subscribe(console.log);
    this.onChanges();
  }
  hide: boolean = true;

  userTypes: UserType[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'emplpoyee', viewValue: 'Emplpoyee'},
    {value: 'student', viewValue: 'Student'}
  ];

  usernameValue: string = "asd";
  passwordValue: string;
  userTypeValue: UserType;

  // Used like ngModel
  onChanges(): void{
    this.myForm.get("username").valueChanges.subscribe(val => {
      this.usernameValue = val;
    });
    this.myForm.get("password").valueChanges.subscribe(val => {
      this.passwordValue = val;
    });
    this.myForm.get("userType").valueChanges.subscribe(val => {
      this.userTypeValue = val;
    });
  }

  get username(){
    return this.myForm.get("username");
  }
  get password(){
    return this.myForm.get("password");
  }
  get userType(){
    return this.myForm.get("userType");
  }

  //! When logging in check if it is first time and if it is -> open mini sheet for changing password
  login(): void{

  }

  //! Only the student can register by himself
  register(): void{

  }

}
