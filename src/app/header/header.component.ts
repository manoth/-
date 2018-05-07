import { Component, OnInit } from '@angular/core';

import { JwtHelper } from 'angular2-jwt';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  jwtHelper: JwtHelper = new JwtHelper();

  titel: string = 'ระบบคลังพัสดุ';
  loginPage: string;
  regitPage: string;
  profilePage: string;
  logoutPage: string;
  objPayload: Object;

  constructor(
    private mainService: MainService
  ) {
  }

  ngOnInit() {
    this.objPayload = this.mainService.isToken();
    this.loginPage = this.mainService.loginPath('signin');
    this.regitPage = this.mainService.loginPath('signup');
    this.profilePage = this.mainService.loginPath('profile');
    this.logoutPage = this.mainService.loginPath('logout');   
  }

  logout() {
    this.mainService.logout();
  }

}
