import {Component, ViewContainerRef} from '@angular/core';
import {JssStyleService} from "../jssStyle.service";
import {DivHandlerComponent} from "../div-handler/div-handler.component";

@Component({
  selector: 'sDiv',
  template: '<ng-content></ng-content>',
})

export class SuperDivComponent extends DivHandlerComponent {

  constructor(jssStyleService: JssStyleService, vcr: ViewContainerRef) {
    super(jssStyleService, vcr)

  }


}
