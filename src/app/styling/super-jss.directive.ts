import {Directive, HostListener, Input, OnInit, ViewContainerRef} from '@angular/core';
import {JssStyleService} from "./jssStyle.service";
import {IBreakingStyle, ITheme, SJss} from "./model";

@Directive({
  selector: '[sJss]'
})
export class SuperJssDirective implements OnInit {

  @Input() sJss?: SJss;

  theme: ITheme;
  superDivElement: HTMLElement;
  getScreenWidth: number;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.applyTypography(this.superDivElement, this.theme, window.innerWidth);
    this.applyStylesToElement(this.superDivElement, this.sJss ? this.sJss : {}, this.theme, window.innerWidth);
  }

  constructor(private jssStyleService: JssStyleService, private vcr: ViewContainerRef) {
    this.theme = jssStyleService.theme();
    this.superDivElement = vcr.element.nativeElement

  }

  ngOnInit(): void {
    this.onWindowResize();
  }

  applyTypography(el: HTMLElement, theme: ITheme, screenWidth: number = 0) {
    Object.keys(theme.typography)?.forEach(key => {
      const jss: SJss = {marginBlockStart: '0', marginBlockEnd: '0', ...theme.typography.default}
      if (el.nodeName === key) {
        // @ts-ignore
        this.applyStylesToElement(el, {...jss, ...theme.typography[key]}, theme, screenWidth)
      }
    })
  }

  applyStylesToElement(el: HTMLElement, jssStyle: SJss = {}, theme: ITheme, screenWidth: number = 0): void {
    if (jssStyle) {
      Object.keys(jssStyle)?.forEach(key => {
        // @ts-ignore
        el.style[key] = this.applyStyle(jssStyle[key], screenWidth, theme)
      })
    }
  }

  applyStyle(styleValue: IBreakingStyle | string | undefined, screenWidth: number, theme: ITheme, defaultValue: string = ''): string {
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
