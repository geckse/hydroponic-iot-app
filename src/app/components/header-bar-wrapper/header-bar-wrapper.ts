import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-bar-context',
  templateUrl: './header-bar-wrapper.html',
  styleUrls: ['./header-bar-wrapper.scss'],
})
export class HeaderBarWrapperComponent implements OnInit {

  @Input() header: string;
  @Input() subHeader: string;
  @Input() slideElements: Array<any>;
  @Input() initSlide: number;
  @Output() slideClick = new EventEmitter<any>();

  @ViewChild('headerBarSlide', { static: true }) slider;

  slideOpts: any = {
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: false,
      initialSlide: this.initSlide,
    };

  constructor() { }

  ngOnInit() {
    this.slideOpts = {
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: false,
      initialSlide: this.initSlide,
    };
  }
  slideClickTrigger(slide){
    this.slideClick.emit({slide: slide});
  }
}
