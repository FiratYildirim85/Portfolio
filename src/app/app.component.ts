import { Component, Injectable, OnInit } from '@angular/core';


@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public imprint: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  closeImprint() {
    this.imprint = false;
  }

  openImprint() {
    this.imprint = true;
  }

  
}
