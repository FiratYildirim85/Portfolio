import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos/dist/aos.js';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
