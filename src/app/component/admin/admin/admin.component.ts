import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AdminComponent implements OnInit {

  board_list : any;
  count:Number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getAdminList();
  }

  getAdminList(){
    this.http.get('/board/admin').subscribe(data => {
      this.board_list = data;
    });
  }

  deleteBtn(id, b_code){
    if(confirm("delete go on?")){
      this.http.get('/board/boardDeleteCheck/'+ b_code).subscribe(data =>{
        if(data > 0){
          alert("delete fail");
        }else{
          this.http.delete('/board/admin/' + id)
            .subscribe(res => {
              this.ngOnInit();
            }, (err) => {
              console.log(err);
            }
            );
        }
      });
    }
  }

}
