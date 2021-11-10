import {Component, Input, ViewContainerRef} from '@angular/core';
import {ITheme,  SJss} from "../model";

@Component({
  selector: 'sDiv',
  template: '<ng-content></ng-content>',
})

export class SuperDivComponent  {
  @Input() sJss: SJss;

  theme: ITheme;
  superDivElement: HTMLElement;


  constructor(private vcr: ViewContainerRef) {
    this.superDivElement = vcr.element.nativeElement
  }



}
