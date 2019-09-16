import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.html',
  styleUrls: ['./header-bar.scss'],
})
export class HeaderBarComponent implements OnInit {

  @Input() hideBackBtn;
  @Input() showMenuBtn;
  @Input() showProfileBtn;
  @Input() backHref;
  @Input() fixed;
  @Input() header;
  @Input() content;
  @Input() actions: Array<{
      title: string,
      icon: string,
      action: any
  }>;
  @Input() srollOffset;
  @Output() actionClick = new EventEmitter<any>();

  private triggerDistanceForShrink: number = 60;
  @HostBinding('class.passed-scroll-offset') isOnTop: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.content && this.content.ionScroll){
      this.content.ionScroll.subscribe((scrollEvent: CustomEvent) => {
        let scrollOffset = (!this.srollOffset ? this.triggerDistanceForShrink : this.srollOffset);
        if(scrollEvent.detail.scrollTop > this.triggerDistanceForShrink){
          this.isOnTop = true;
        } else {
          this.isOnTop = false;
        }
      });
    }
  }

  onActionBtnClick(data){
    this.actionClick.emit({action: data});
  }

}
