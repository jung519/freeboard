import { Injectable } from '@angular/core';

@Injectable()
export class GetSequenceValueService {

  constructor() { }


  getObjectValue(obj, keyValue){
    let returnValue;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key == keyValue) {
          returnValue = obj[key];
          break;
        }
      }
    }
    return returnValue;
  }
  
}
