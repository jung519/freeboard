import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {


  board_detail:any = {};
  inputPassword:String;
  out_id:String;
  regist_date:Date;
  board_subject:any = {};

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private http  : HttpClient,
  ) { }


  ngOnInit() {
    this.out_id = this.route.snapshot.params['id'];
    this.getBoardDetail(this.route.snapshot.params['id']);
  }

  getBoardDetail(id){
    this.http.post('/board/counterIncrease/'+id, null)
      .subscribe(res => {
        this.http.get('/board/id/' + id).subscribe(data => {
          this.board_detail = data;
          this.regist_date = this.board_detail.regist_date;
          this.getBoardSubject(this.board_detail.b_code);
        });
      }, (err) => {
        console.log(err);
      });
  }

  getBoardSubject(b_code){
    this.http.get('/board/boardTitle/' + b_code).subscribe(data => {
      this.board_subject = data;
    });
  }

  //delete
  boardDelete(id){
    //confirm id and password
    if(this.board_detail.password != this.inputPassword){
      alert('password does not match');
      return;
    }else{
      if (confirm("delete go on?")) {
        this.http.post('/board/delete/' + id, this.board_detail)
          .subscribe(res => {
            this.router.navigate(['/board_list', this.board_detail.b_code]);
          }, (err) => {
            console.log(err);
          }
          );
      }
    }
  }

  //edit
  boardEdit(id){
    if (this.board_detail.password != this.inputPassword){
      alert('password does not match');
      return;
    }else{
      this.router.navigate(['/edit', id]);
    }
  }

}
