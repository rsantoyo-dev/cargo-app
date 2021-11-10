import {Directive, HostListener, Input, OnInit, ViewContainerRef} from '@angular/core';
import {JssStyleService} from "./jssStyle.service";
import {IBreakingStyle, ITheme, SJss} from "./model";
export enum Ijs{
  flex='flex'
}
@Directive({
  selector: '[sJss]'
})
export class SuperJssDirective implements OnInit{

  @Input() sJss: SJss;

  theme: ITheme;
  superDivElement: HTMLElement;
  getScreenWidth: number;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.applyStylesToElement(this.superDivElement, this.sJss, window.innerWidth, this.theme);
  }

  constructor(private jssStyleService: JssStyleService, private vcr: ViewContainerRef) {
    this.theme = jssStyleService.theme();
    this.superDivElement = vcr.element.nativeElement
  }

  ngOnInit(): void {
    this.onWindowResize();
  }

  applyStylesToElement(el: HTMLElement, jssStyle:SJss={}, screenWidth: number, theme:ITheme): void {
    if (jssStyle) {
      Object.keys(jssStyle)?.forEach(key => {
        // @ts-ignore
        el.style[key] = this.applyStyle(jssStyle[key], screenWidth, theme)
      })
    }
  }

  applyStyle(styleValue: IBreakingStyle | string | undefined, screenWidth:number, theme:ITheme, defaultValue: string = ''): string {
    let style: string | undefined = "";
    switch (typeof styleValue) {
      case 'undefined':
        return style;
      case 'string':
        return styleValue ? styleValue : defaultValue;
      case 'object':
        Object.keys(styleValue)?.forEach(key => {
          if ((key === 'xs' || key === 'sm' || key === 'md' || key === 'lg' || key === 'xl')
            && (styleValue[key] && screenWidth > theme.breakpoints[key])) {
            style = styleValue[key];
          }
        })
        break;
    }
    return style
  }


}
