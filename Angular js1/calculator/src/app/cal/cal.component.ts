import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service'

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  operations
  result:number
  _number1
  _number2
  constructor(private service:CalcService) { }
  
  ngOnInit() {
    this.operations=this.service.getOpration()
  }
}
calResult(_number1:string,_number2:string,_selid){
  //let result:number;
  switch(_selid)
  {
    case 'ADD':
    var add=parseInt(_number1) + parseInt(_number2)
   // alert(add)
   this.result=add
    break

    case 'SUB':
    var sub=parseInt(_number1) - parseInt(_number2)
   // alert(sub)
   this.result=sub
   break

    case 'MUL':
    var mul=parseInt(_number1) * parseInt(_number2)
   // alert(mul)
   this.result=mul
   break

    case 'DIV':
    var div=parseInt(_number1) / parseInt(_number2)
   // alert(div)
   this.result=div
    break

  }

 //alert(add)
}
resetMethod(_number1:string,_number2:string){
 _number1=null,
 _number2=null
console.log(_number1)
}

