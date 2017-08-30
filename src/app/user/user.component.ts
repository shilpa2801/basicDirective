import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = "";
  displayName = "";
  status=false;
  constructor() { }

  ngOnInit() {
  }
  reset(){
  	this.username='';
    this.displayName='';
  }

  addUserName(){
    this.status = true;
    this.displayName = this.username;
  }

}
