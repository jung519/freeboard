import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {

  boards: any;
  returnValue:any={};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/board').subscribe(data => {
      this.returnValue = data;
      this.boards = this.returnValue.data;
      //this.setSessionDate(this.returnValue.session);
    })
  }

  setSessionDate(session){
    if (session == undefined){
      
    }else{

    }
  }

}
