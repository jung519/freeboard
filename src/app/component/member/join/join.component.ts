import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  member_join:any={};
  emailCheck:String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  fnEmailCheck(){
    let email = this.member_join.email;
    if (email != undefined){
      this.http.get('/member/emailCheck/' + email).subscribe(data => {
        if (data > 0) {
          this.emailCheck = "not used";
        } else {
          this.emailCheck = "yes";
        }
      });
    }
  }

  addMember(){
    this.member_join.regist_date = new Date();
    this.http.post('/member/join', this.member_join)
      .subscribe(res => {
        alert('complete join');
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  refreshEmail(){
    this.emailCheck = "";
  }

}
