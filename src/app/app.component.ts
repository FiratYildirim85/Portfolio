import { Component, Injectable, OnInit } from '@angular/core';
import * as AOS from 'aos';

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
        AOS.init();
  }

  closeImprint() {
    this.imprint = false;
  }

  openImprint() {
    this.imprint = true;
  }

  
}
