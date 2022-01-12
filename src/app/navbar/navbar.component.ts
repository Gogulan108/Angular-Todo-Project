import { Component, OnInit } from '@angular/core';
import { StorageSessionService } from '../storage-session.service';
import { UserInfoService } from '../userinfo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: any;
  userstatus = false;
  islogin = 'false';
  constructor(private userinfo: UserInfoService, private sessionStorage:StorageSessionService) { }

  ngOnInit(): void{
    this.loggeduser()
    if(!this.userName){
      window.sessionStorage.clear();
    }
    this.islogin=this.sessionStorage.get('isloggedin')!;
    console.log(this.islogin);
  }
  loggeduser(): void {
    var self = this.userinfo.fetchUser();
    if (self) {
      this.userName = self
      this.userstatus = true;
    }


  }
}
