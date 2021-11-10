import {Directive, HostListener, Input, OnInit, ViewContainerRef} from '@angular/core';
import {JssStyleService} from "./jssStyle.service";
import {ITheme, JssStyle} from "./model";

@Directive({
  selector: '[sJss]'
})
export class SuperJssDirective implements OnInit{

  @Input() sJss: JssStyle;

  theme: ITheme;
  superDivElement: HTMLElement;
  getScreenWidth: number;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.jssStyleService.applyStylesToElement(this.superDivElement, this.sJss, window.innerWidth, this.theme);
  }

  constructor(private jssStyleService: JssStyleService, private vcr: ViewContainerRef) {
    this.theme = jssStyleService.theme();
    this.superDivElement = vcr.element.nativeElement
  }

  ngOnInit(): void {
    this.onWindowResize();
  }


}
