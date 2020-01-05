import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderBarComponent } from './header-bar/header-bar';
import { HeaderBarWrapperComponent } from './header-bar-wrapper/header-bar-wrapper';
import { SluggizePipe } from './../pipes/sluggize';

export const components = [
  HeaderBarComponent,
  HeaderBarWrapperComponent,
];

export const pipes = [
  SluggizePipe
];

@NgModule({
  declarations: [components, pipes],
  imports: [CommonModule,FormsModule,IonicModule],
  exports: [components, pipes]
})
export class ComponentsModule {}
