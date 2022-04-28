import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppRepository } from '../core/repository/app.repository';

@Component({
  selector: 'app-scrolling-text',
  templateUrl: './scrolling-text.component.html',
  styleUrls: ['./scrolling-text.component.css'],
  animations: [
    trigger('scroll', [
      state('on', style({right: '-3500px'})),
      transition('* => *', [
        style({right: '-3500px'}),
        animate(82000, style({right: '100%'}))
      ])
    ])
  ]
})
export class ScrollingTextComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  hideContent: boolean = false;
  vpgResults;

  state = 0;
  scrollDone() {
    this.state++;
  }

  constructor(private repository: AppRepository) {}

  ngOnInit() {
    this.latestResultsVpg();
  }

  latestResultsVpg() {
    this.repository.latestResultsVPG().subscribe(response => {
      this.vpgResults = response.data
      // console.log("VPG results: " + JSON.stringify(this.vpgResults))
    })
  }
}