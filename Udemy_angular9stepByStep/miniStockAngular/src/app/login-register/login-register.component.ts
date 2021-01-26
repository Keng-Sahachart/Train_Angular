import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  userData = {
    user: "admin",
    password: "123456",
  }

/** 
 * เพิ่ม router เข้ามา เพื่อสั่ง navigate เปลี่ยนหน้าได้
 */
  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  checkLogin(){
    if(this.userData.user == "admin" && this.userData.password == "12345"){
      alert("Username & Password valid");
      this.router.navigate(['dashboard']);
    }else{
      alert("Username & Password invalid");
    }
  }

}
