import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

  returnObj:Object;

  constructor(
    private http: HttpClient
  ) { }

  getCommentCounter(data){
    for(let i in data){
      let value = data[i];

      //get comment counte 
      this.http.get('/comment/comment/' + value._id).subscribe(data => {
        value.commentCnt = Object.keys(data).length;
      });

      this.returnObj = value;
    }
    return data;
  }

}
