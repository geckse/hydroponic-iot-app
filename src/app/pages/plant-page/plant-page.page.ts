import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { PlantCatalogueService } from './../../providers/plant-catalogue/plant-catalogue-service';


@Component({
  selector: 'app-plant-page',
  templateUrl: './plant-page.page.html',
  styleUrls: ['./plant-page.page.scss'],
})
export class PlantPage implements OnInit {
  @ViewChild('pageContent', { read: IonContent, static: true }) content: IonContent;

  plants: any;
  plantSlug: string = "";
  plant: any;

  constructor(private plantCatalogue: PlantCatalogueService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {

   }

  ngOnInit() {
    this.plants = this.plantCatalogue.getPlants();
    if(this.activatedRoute.snapshot.paramMap.get('slug')){
      this.plantSlug = this.activatedRoute.snapshot.paramMap.get('slug');
      let procSlug = this.plantSlug.replace(/\s/g,"-").toLowerCase().trim();
      this.plants.forEach((plant)=>{
        if(plant.name.replace(/\s/g,"-").toLowerCase().trim() == procSlug){
          this.plant = plant;
        }
      });
    }
  }
  ngAfterViewInit(){
    if(this.content){
      // @ts-ignore
      this.content.el.style.setProperty('--background', this.plant.background);
      // @ts-ignore
      this.content.el.style.setProperty('--ion-toolbar-background', this.plant.background);
    }
  }

}
