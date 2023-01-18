import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() iconName: string = 'check_circle';
  @Input() iconEmail: string = 'check_circle';
  @Input() iconMessage: string = 'check_circle';

  messageGreen: boolean = false;
  messageRed: boolean = false;
  emailRed: boolean = false;
  emailGreen: boolean = false;
  nameRed: boolean = false;
  nameGreen: boolean = false;

  nameValue: string = '';
  emailValue: string = '';
  messageValue: string = '';
  
  elementControl = new FormControl('inputEmail');

  constructor() { 
  }

  ngOnInit(): void {

  }

  changeText(field: string) {
    switch (field) {
      case 'message':
        break;
    
      default:
        break;
    }
  }

  colorRed(field: string) {
    switch (field) {
      case 'message':
        this.messageRed = true;
        this.messageGreen = false;
        this.iconMessage = 'error';
        break;
      case 'email':
        this.emailRed = true;
        this.emailGreen = false;
        this.iconEmail = 'error';
        break;
      default:
        this.nameRed = true;
        this.nameGreen = false;
        this.iconName = 'error';
        break;
    }
  }

  colorGreen(field: string) {
    switch (field) {
      case 'message':
        if(this.messageValue != '') {
          this.messageRed = false;
          this.messageGreen = true;
          this.iconMessage = 'check_circle';
        }
        break;
      case 'email':
        if(this.emailValue != '') {
          this.emailRed = false;
          this.emailGreen = true;
          this.iconEmail = 'check_circle';
        }
        break;
      default:
        if(this.nameValue != '') {
          this.nameRed = false;
          this.nameGreen = true;
          this.iconName = 'check_circle';
        }
        break;
    }
  }
}