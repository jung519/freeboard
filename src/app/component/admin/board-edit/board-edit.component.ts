import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  board_edit: any = {};

  ngOnInit() {
    this.getBoardEdit(this.route.snapshot.params['id']);
  }

  getBoardEdit(id) {
    console.log(id);
    this.http.get('/board/edit/' + id).subscribe(data => {
      console.log("data = " + data);
      this.board_edit = data;
    });
  }

  updateBoard(id) {
    console.log(id);
    this.board_edit.updated_date = Date.now();
    this.http.put('/board/edit/' + id, this.board_edit)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/admin']);
      }, (err) => {
        console.log(err);
      }
      );
  }

  choose(value){
    this.board_edit.del_yn = value;
  }

  cancelBtn(){
    if(confirm("edit cancel?")){
      this.router.navigate(['/admin']);
    }
  }
}
