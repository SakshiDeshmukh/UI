import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service : UserServiceService) { }

  showTable=true;
  data;
  ngOnInit() {
   
    this.data = this.service.getData(5,10)
  }
}
