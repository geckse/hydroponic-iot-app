import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('pageContent', { read: IonContent, static: true }) content: IonContent;

  slideOpts: {
    spaceBetween: 0,
    slidesPerView: 1.15,
  };

  constructor() {}
  ngOnInit() {
  }

}
