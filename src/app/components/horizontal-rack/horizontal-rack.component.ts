import { Component, OnInit, Input, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ModalController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';

import { Plant } from './../../models/Plant';
import { Row } from './../../models/Row';

import { Gesture, GestureController, GestureConfig } from '@ionic/angular';

@Component({
  selector: 'hydro-horizontal-rack',
  templateUrl: './horizontal-rack.component.html',
  styleUrls: ['./horizontal-rack.component.scss'],
})
export class HorizontalRackComponent implements OnInit {

  @ViewChild('plantSlide',{static: false}) plantRef: ElementRef;

  _row: Row;
  @Input()
  set row(row: Row) {
    this._row = row;
  }
  get row(): Row { return this._row; }

  slideOpts: any = {
    slidesPerView: 'auto',
    nested: true,
    preventClicks: true,
    preventClicksPropagation: true,
  };

  consumeTimeout: any = -1;

  constructor(private modalCtrl: ModalController,
          private routerOutlet: IonRouterOutlet,
          public toastController: ToastController,
          public alertController: AlertController,
          public actionSheetController: ActionSheetController,
          public zone: NgZone,
          public router: Router,
          public navCtrl: NavController,
          private gestureCtrl: GestureController
         ) {
  }

  ngOnInit() {

  }
  ngOnDestroy() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
     this.initGesture();
    }, 400);
  }

  async initGesture(){
    // @ts-ignore
    let elements = this.plantRef.el.querySelectorAll('ion-slide > .inner img');
    elements.forEach( async (element, i) => {
      let styleSwipe = element.style;
      let swipeOptions: GestureConfig = {
        el: element,
        gestureName: 'plant-swipe-up',
        threshold: 0,
        onStart: () => {
          styleSwipe.transition = "none";
        },
        onMove: (ev) => {
          if(ev.deltaY < 0){
            let ysize = -Math.abs(ev.deltaY)/2;
            styleSwipe.transform = `perspective(500px) translate3d(0,${ysize}px,0) scale(${1+(Math.abs(ev.deltaY/800))})`;
          }
        },
        onEnd: (ev) => {
          styleSwipe.transition = "0.3s ease-out";
          styleSwipe.transform = '';
          if(ev.deltaY < -80){


            if(this._row){

              let ysize = -Math.abs(ev.deltaY)/2;
              styleSwipe.transform = `perspective(500px) translate3d(0,${-120}px,0) scale(${1+(Math.abs(ev.deltaY/800))})`;
              styleSwipe.opacity = `0`;
              styleSwipe.filter = `blur(40px)`;
              this.consumPlant(i);

              setTimeout(() => {
                styleSwipe.transform = `perspective(500px) translate3d(0,${70}px,0) scale(${1+(Math.abs(ev.deltaY/800))})`;
                styleSwipe.opacity = `0`;
                styleSwipe.filter = ``;
              }, 350);
              setTimeout(() => {
                styleSwipe.transform = ``;
                styleSwipe.opacity = `1`;
                styleSwipe.filter = ``;
              }, 500);

            } else {
              setTimeout(() => {
                styleSwipe.transform = ``;
                styleSwipe.opacity = `1`;
                styleSwipe.filter = ``;
              }, 500);
            }

          }
        }
      };
      const gesture = this.gestureCtrl.create(swipeOptions);
      gesture.enable();

    });

  }

  async consumPlant(index: number){

  }

}
