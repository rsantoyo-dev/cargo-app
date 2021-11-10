import {Component, HostListener, Input, ViewContainerRef} from '@angular/core';
import {JssStyleService} from "../jssStyle.service";
import {ITheme, JssStyle} from "../model";

@Component({
  selector: 'sDiv',
  template: '<ng-content></ng-content>',
})

export class SuperDivComponent  {
  @Input() jssStyle: JssStyle;

  theme: ITheme;
  superDivElement: HTMLElement;

  getScreenWidth: number;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.jssStyleService.applyStylesToElement(this.superDivElement, this.jssStyle, window.innerWidth, this.theme);
  }
  constructor(private jssStyleService: JssStyleService, private vcr: ViewContainerRef) {
    this.theme = jssStyleService.theme();
    this.superDivElement = vcr.element.nativeElement
  }

  ngOnInit(): void {
    this.onWindowResize();
  }

}
