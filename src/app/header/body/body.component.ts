import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  num1:number=0;
  num2:number=0;  
  @ViewChild('op') selector!:ElementRef

  mostrar(){
    
  }
  constructor() { }



}
