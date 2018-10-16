import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sequence-add',
  templateUrl: './sequence-add.component.html',
  styleUrls: ['./sequence-add.component.css']
})
export class SequenceAddComponent implements OnInit {

  seq_add : any={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  saveSequence(){
    this.http.post('/common/sequenceAdd', this.seq_add)
      .subscribe(res => {
        this.router.navigate(['/commonSequence']);
      }, (err) => {
        console.log(err);
      }
      );
  }

  cancelBtn(){
    if (confirm("edit cancel?")) {
      this.router.navigate(['/commonSequence']);
    }
  }

}
