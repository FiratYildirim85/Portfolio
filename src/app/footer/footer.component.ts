import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  closeImprint() {
    this.appComponent.closeImprint();
  }

  openImprint() {
    this.appComponent.openImprint();
  }
}