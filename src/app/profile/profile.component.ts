import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div  id="targetImage" #targetimage>
      <img src="../../assets/angular.png" width="200px" height="200px">
    <div>`,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}