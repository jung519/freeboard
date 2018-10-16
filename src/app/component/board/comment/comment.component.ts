import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommentComponent implements OnInit {

  @Input() target_id:String;

  comment_list:any;
  comment_add:any = {};
  inputCommentPassword:String;

  p: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
   this.getCommentList();
  }

  getCommentList(){
    this.http.get('/comment/comment/' + this.target_id).subscribe(data => {
      console.log("data comment = " + data);
      this.comment_list = data;
    });
  }

  saveComment(){
    this.comment_add.target_id = this.target_id;
    let counter = this.comment_list.counter == undefined ? 0 : this.comment_list.counter;
    this.comment_add.counter = counter + 1;
    if (this.comment_add.target_id != undefined){
      this.http.post('/comment/comment_add', this.comment_add)
        .subscribe(res => {
          this.comment_add.commentContent = "";
          this.getCommentList();
        }, (err) => {
          console.log(err);
        });
    }
  }

  commentDelete(id, i){
    let password = (<HTMLInputElement>window.document.getElementById("inputCommentPassword_" + i)).value;
    this.comment_add.inputCommentPassword = password;
    let list = this.comment_list[i];
    if (password == list.comment_password){
      if(confirm("delete go on?")){
        this.http.delete('/comment/remove/' + id)
          .subscribe(res => {
            this.getCommentList();
          }, (err) => {
            console.log(err);
          }
          );
      }
    }else{
      alert("password does not matched");
    }
  }


}
