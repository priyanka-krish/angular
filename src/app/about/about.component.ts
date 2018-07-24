import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user$: object;

  constructor(private data: DataService) {
     }

  ngOnInit() {
    this.data.getUsers().subscribe(data=>this.user$=data);
   
  }

}
