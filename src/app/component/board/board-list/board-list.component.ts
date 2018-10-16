import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../service/common/common.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
})
export class BoardListComponent implements OnInit {
  
  board_list: any;
  board_subject: any = {};
  b_code:String;
  commentCnt:Number=0;

  p: number = 1;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.b_code = this.route.snapshot.params['b_code'];
    this.getBoardList(this.route.snapshot.params['b_code']);
    this.getBoardSubject(this.route.snapshot.params['b_code']);
  }

  getBoardList(b_code) {
    this.http.get('/board/b_code/' + b_code).subscribe(data => {
      this.board_list = this.common.getCommentCounter(data);
    });
  }

  getBoardSubject(b_code) {
    this.http.get('/board/boardTitle/' + b_code).subscribe(data => {
      this.board_subject = data;
    });
  }

}
