import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  board_edit:any={};
  board_subject:any={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getBoardDetail(this.route.snapshot.params['id']);
  }

  getBoardDetail(id) {
    console.log(id);
    this.http.get('/board/id/' + id).subscribe(data => {
      this.board_edit = data;
      this.getBoardSubject(this.board_edit.b_code);
    });
  }

  editBoard(){
    this.http.post('/board/editBoard/'+this.board_edit._id, this.board_edit)
    .subscribe(res =>{
      let id = res['_id'];
      this.router.navigate(['/board_detail', id]);
    }, (err)=>{
      console.log(err);  
    });
  }

  getBoardSubject(b_code) {
    this.http.get('/board/boardTitle/' + b_code).subscribe(data => {
      this.board_subject = data;
    });
  }

}
