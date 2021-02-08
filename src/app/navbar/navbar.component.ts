import { AlertifyServiceService } from './../services/alertify-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedinUser: string;
  constructor(private alertify: AlertifyServiceService) { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success("You are logged out !");
  }
}
