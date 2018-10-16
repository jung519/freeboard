import { Component, OnInit, Input } from '@angular/core';
import { PagingService } from '../../../service/paging/paging.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() inputRouter:String;
  @Input() inputParameter:String;

  pagingNumber:Number;

  constructor(
    private paging: PagingService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getListCount();
  }

  getListCount(){
    this.http.get(this.inputRouter+'/'+ this.inputParameter).subscribe(data => {
      this.pagingNumber = this.paging.getPagingCount(data);
    });
  }

}
