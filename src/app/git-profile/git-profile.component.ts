import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
  search:string

  @Output() user = new EventEmitter<any>()

searchProfile(){
  console.log("Recieved: "+this.search);
  this.user.emit(this.search);
  this.search = '';
  
}

constructor() { 
}
  ngOnInit() {
  }

}
