import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { PlantCatalogueService } from './../../providers/plant-catalogue/plant-catalogue-service';


@Component({
  selector: 'app-plant-catalogue',
  templateUrl: './plant-catalogue.page.html',
  styleUrls: ['./plant-catalogue.page.scss'],
})
export class PlantCataloguePage implements OnInit {
  @ViewChild('pageContent', { read: IonContent, static: true }) content: IonContent;

  plants: any;

  constructor(private plantCatalogue: PlantCatalogueService) { }

  ngOnInit() {
    this.plants = this.plantCatalogue.getPlants();
    console.log(this.plants);
  }

}
