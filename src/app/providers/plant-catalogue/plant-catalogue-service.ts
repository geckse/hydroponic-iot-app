import { Injectable } from '@angular/core';

import { default as PlantRequirements } from './../../../assets/data/plant-requirements.json';

@Injectable({
  providedIn: 'root'
})
export class PlantCatalogueService {

  constructor() { }

  getPlants(){
    return PlantRequirements;
  }

}
