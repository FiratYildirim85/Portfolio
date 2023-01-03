import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  

  public aboutMe: boolean = false;
  public skills: boolean = false;
  public portfolio: boolean = false;
  public contact: boolean = false;
  public menu: boolean = true;

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }


  closeImprint() {
    this.appComponent.closeImprint();
  }

  select(key: string) {
    switch (key) {
      case 'contact':
        this.aboutMe = false;
        this.skills = false;
        this.portfolio = false;
        this.contact = true;
        break;
 
    }
  }
}
