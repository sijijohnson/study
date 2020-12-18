import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video',
  template:`
<h2>{{title}}</h2> 
<button (click)='childFunction()'>Hey Child</button>
`
})
export class VideoComponent {
  title:string=""
  @Output() myEvent = new EventEmitter();
  childFunction(){
    console.log('I am handled in child')
   //this.myEvent.emit('hey I am data from child');
  }
  @Input()
set setData(m:string){
this.title= m + "append data in child";
}
get setData(){
 return this.title;
}
}
