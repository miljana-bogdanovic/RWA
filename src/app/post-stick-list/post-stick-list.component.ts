import { Component, OnInit } from '@angular/core';
import { Poststick } from '../models/post-stick';

@Component({
  selector: 'app-post-stick-list',
  templateUrl: './post-stick-list.component.html',
  styleUrls: ['./post-stick-list.component.scss']
})
export class PostStickListComponent implements OnInit {
postSticks : Poststick[]= [
  new Poststick("Lab vezba DS", "25.maj", true),
  new Poststick("MIKS nadoknada", "26. maj", false),
  new Poststick("Nemacki vezbanje", "27.maj", false),
  new Poststick("Dokumentacija SI", "23. maj", true),
]
  constructor() { }

  ngOnInit(): void {
  }

}
