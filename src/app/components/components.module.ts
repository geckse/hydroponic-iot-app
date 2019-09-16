import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderBarComponent } from './header-bar/header-bar';
import { HeaderBarWrapperComponent } from './header-bar-wrapper/header-bar-wrapper';

export const components = [
  HeaderBarComponent,
  HeaderBarWrapperComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule,FormsModule,IonicModule],
  exports: [components]
})
export class ComponentsModule {}
