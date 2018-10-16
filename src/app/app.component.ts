import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sessionInfo:any={};

  constructor(private http: HttpClient) { }

  ngOnInit(){
    //getSession
    this.http.post("/member/getSession",this.sessionInfo).subscribe(data=>{
      this.sessionInfo = data;
      if (this.sessionInfo.email == undefined){
        this.sessionInfo = false;
      }
    });
  }

}
