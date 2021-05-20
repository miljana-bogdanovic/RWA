import { Component, Input, OnInit } from '@angular/core';
import { Poststick } from '../models/post-stick';
import {faExclamation} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post-stick-item',
  templateUrl: './post-stick-item.component.html',
  styleUrls: ['./post-stick-item.component.scss']
})
export class PostStickItemComponent implements OnInit {
@Input() postStick : Poststick=new Poststick("", "", false);
@Input() postStickList : Poststick[]=[];
iconExclamation=faExclamation;
isHovered : boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClickIzbrisi(){
   const index=this.postStickList.findIndex(post => post.description===this.postStick.description);
   this.postStickList.splice(index,1);
  }
}
