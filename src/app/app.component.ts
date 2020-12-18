import { Component } from '@angular/core';
import {freeApiService} from './services/freeapi.services';
import {Comments} from './classes/comments'
import {Posts} from './classes/post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // childtitle ='child data';
  // parentFunction(data:string){
  //   console.log(data)

  // }
  constructor(private _freeApiService:freeApiService){}
  lstcomments!:Comments[];
  lstPosts!:Posts[];
  ngOnit(){
    this._freeApiService.getcomments()
    .subscribe
    (
      data =>
      {
        this.lstcomments = data;
      }
    )
    this._freeApiService.getcommentsbyprameter()
    .subscribe
    (
      data=>
      {
        this.lstPosts =data;
      }
    )
  }
}
