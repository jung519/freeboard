import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-common-sequence',
  templateUrl: './common-sequence.component.html',
  styleUrls: ['./common-sequence.component.css']
})
export class CommonSequenceComponent implements OnInit {

  sequence_list : any =[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get('/common/counters').subscribe(data => {
      console.log("data = " + data);
      this.sequence_list = data;
    });
  }


  seqDelete(id){
    if (confirm('id [' + id + '] delete go on?')) {
      this.http.delete('/common/delete/' + id)
        .subscribe(res => {
          this.ngOnInit();
        }, (err) => {
          console.log(err);
        }
        );
    }
  };

}
