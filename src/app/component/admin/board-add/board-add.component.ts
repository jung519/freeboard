import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetSequenceValueService } from '../../../service/sequence-value/get-sequence-value.service';

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardAddComponent implements OnInit {
  

  board_add : any = {};
  seqCode_list : any;
  seqCode:String;
  seqValue:Number;
  seqId:String;


  constructor(
    private http: HttpClient,
    private router: Router,
    private getSequenceValueService: GetSequenceValueService
  ) { }

  ngOnInit() {
    this.getSequenceList()
  }

  saveBoard(){
    this.http.post('/board/admin', this.board_add)
      .subscribe(res => {
        //sequence increase
        this.editSequenceIncrease();
      }, (err) => {
        console.log(err);
      });
  }

  editSequenceIncrease(){
    this.http.post('/common/seqInc/'+this.seqId, this.board_add)
      .subscribe(res => {
        this.router.navigate(['/admin']);
      }, (err) => {
        console.log(err);
      });
  }

  cancelBtn(){
    if (confirm("edit cancel?")) {
      this.router.navigate(['/admin']);
    }
  }

  getSequenceList(){
    this.http.get('/common/counters').subscribe(data => {
      this.seqCode_list = data;
    })
  }


  
  codeChange(code_name){
    this.http.get('/common/counters/'+code_name).subscribe(data => {
      this.seqCode = this.getSequenceValueService.getObjectValue(data,"code_name");
      this.seqValue = this.getSequenceValueService.getObjectValue(data,"sequence_value") + 1;
      this.seqId = this.getSequenceValueService.getObjectValue(data,"_id");
      this.board_add.b_code = this.seqCode.toString() + this.seqValue.toString();
    })
  }

}
