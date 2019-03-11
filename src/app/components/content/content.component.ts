import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  user:User;
  submitted:boolean = false;
  accessGranted:boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  gainAccess() {
    this.submitted = true;
    if (parseInt(this.user.userAge) >= 18) {
        this.accessGranted = true;
    } else {
        this.accessGranted = false;
    }
  }

}
