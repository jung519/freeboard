import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  member_login:any={};
  returnValue:any={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  doLogin(){
    this.http.post('/member/login',this.member_login)
    .subscribe(data => {
      this.returnValue = data;
      if (this.returnValue.email != undefined){
        location.href="/";
      }else{
        alert("login fail");
      }
    }, (err) => {
        console.log(err);
    });
  }
}
