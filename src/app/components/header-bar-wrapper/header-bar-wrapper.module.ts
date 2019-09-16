import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderBarWrapperComponent } from './header-bar-wrapper';

@NgModule({
  declarations: [
    HeaderBarWrapperComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HeaderBarWrapperComponent
  ]
})
export class HeaderBarWrapperComponentModule {}
