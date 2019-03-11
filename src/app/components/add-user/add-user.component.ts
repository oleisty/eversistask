import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter();

  registerForm: FormGroup;
  userName:string;
  userSurname:string;
  userAge:string;
  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.pattern("[a-zA-Z ]*")],
      userSurname: ['', Validators.pattern("[a-zA-Z ]*")],
      userAge: ['', [Validators.pattern("^[0-9]*$")]]
    });
  }

  get userForm() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
        this.submitted = false;
        return;
    }

    this.submitted = true;

    const user = {
      userName: this.registerForm.value.userName,
      userSurname: this.registerForm.value.userSurname,
      userAge: this.registerForm.value.userAge,
      completed: false
    }

    this.addUser.emit(user);

    this.userName = user.userName;
    this.userSurname = user.userSurname;
    this.userAge = user.userAge;
    
    this.router.navigate(['/content']);
  }

}
