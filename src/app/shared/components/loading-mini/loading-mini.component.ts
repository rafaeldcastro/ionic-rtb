import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'loading-mini',
  templateUrl: 'loading-mini.component.html',
  styleUrls: ['loading-mini.component.scss']
})
export class LoadingMiniComponent implements AfterViewInit{

  @Input() color;
  @Input() type: string = 'spinner';
  protected loadingColor: string[] = [];

  constructor() {
    
  }
  ngAfterViewInit(){
    this.processColor();
  }
  
  processColor(){
    console.log(this.color);
    if(Array.isArray(this.color)){
      this.loadingColor = this.color;
    } else {
      this.loadingColor[0] = this.color;
      this.loadingColor[1] = this.color;
      this.loadingColor[2] = this.color;
    }
  }
}
