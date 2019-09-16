import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderBarComponent } from './header-bar';

@NgModule({
  declarations: [
    HeaderBarComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderBarComponentModule {}
