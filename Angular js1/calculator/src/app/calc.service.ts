import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  

  getOpration(){
    return[
      "ADD","SUB","MUL","DIV"
    ]
  }


}

