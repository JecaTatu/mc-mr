import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  imageObject: Array<object> = [
  {
    image: 'assets/image_7.jpg',
    thumbImage: 'assets/image_7.jpg',
    alt: 'alt of image',
    title: 'Colabore - Ajude a melhorar a diversidade na publicidade'
  },
  {
    image: 'assets/image_10.jpg',
    thumbImage: 'assets/image_10.jpg',
    alt: 'alt of image',
    title: 'title of image'
  },

];
  
  constructor() { }

  ngOnInit(): void {
  }

}
