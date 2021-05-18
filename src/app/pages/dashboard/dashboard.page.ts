import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { Hydrosystem } from './../../models/Hydrosystem';
import { Plant } from './../../models/Plant';
import { Row } from './../../models/Row';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('pageContent', { read: IonContent, static: true }) content: IonContent;

  slideOpts;

  system: Hydrosystem;

  constructor() {

  }
  ngOnInit() {
    this.slideOpts = {
        spaceBetween: 0,
        slidesPerView: 2.2,
      };

    this.system = {
      id: "1",
      name: "Window Shelf",
      type: "ebb-flow",
      rows: [{
        name: 'Row name',
        slots: 6,
        plants: [{
          id: "1",
          name: "Salad",
          img: "plant.png"
        } as Plant]
      } as Row,{
        name: 'Row name',
        slots: 6,
        plants: [{
          id: "1",
          name: "Salad",
          img: "plant.png"
        } as Plant]
      } as Row]
    } as Hydrosystem;
  }

}
