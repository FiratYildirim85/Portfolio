import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public aboutMe: boolean = false;
  public skills: boolean = false;
  public portfolio: boolean = false;
  public menu: boolean = true;


  @Input() icon:string = 'menu';

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  closeImprint() {
    this.appComponent.closeImprint();
  }

  select(key: string) {
    switch (key) {
      case 'aboutMe':
        this.aboutMe = true;
        this.skills = false;
        this.portfolio = false;
        break;
      case 'skills':
        this.aboutMe = false;
        this.skills = true;
        this.portfolio = false;
        break;
        case 'portfolio':
        this.aboutMe = false;
        this.skills = false;
        this.portfolio = true;
        break;
    }
  }

  public resetSelect() {
    this.aboutMe = false;
    this.skills = false;
    this.portfolio = false;
  }

  mobileMenu() {
    if(this.menu) {
      this.menu = false;
      this.icon = 'close';
      document.body.style.overflowY = "hidden"

    }
    else {
      this.menu = true;
      this.icon = 'menu';
      document.body.style.overflowY = "scroll"
    }
  }

  closeMenu() {
    this.menu = true;
    document.body.style.overflowY = "scroll"
    this.icon = 'menu';
  }
}