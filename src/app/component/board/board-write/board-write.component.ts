import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-write',
  templateUrl: './board-write.component.html',
  styleUrls: ['./board-write.component.css']
})
export class BoardWriteComponent implements OnInit {

  board_write : any = {};
  board_subject : any = {};
  b_code : String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.board_write.b_code = this.route.snapshot.params['b_code'];
    this.board_write.del_yn = 'n';
    this.getBoardSubject(this.route.snapshot.params['b_code']);
  }

  saveBoard(){
    this.board_write.regist_date = new Date();
    this.http.post('/board/write', this.board_write)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/board_detail', id]);
      }, (err) => {
        console.log(err);
      });
  }

  getBoardSubject(b_code) {
    this.http.get('/board/boardTitle/' + b_code).subscribe(data => {
      this.board_subject = data;
    });
  }

}
