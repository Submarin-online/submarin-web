import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  fload: any;
  constructor() { }
  ngOnInit() {
  }
finishload(){
this.fload = true;
}
}
