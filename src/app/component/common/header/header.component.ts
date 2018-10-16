import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HeaderComponent implements OnInit {

  @Input() sessionInfo:any={};
  returnValue:any={};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.sessionInfo.email != ""){
      console.log(this.sessionInfo);
    }else{
      this.sessionInfo = false;
    }
  }

  doLogout(){
    if(confirm("go on log out?")){
      this.http.post('/member/setLogout',this.returnValue).subscribe(data=>{
        location.reload();
      });
    }
  }

}
