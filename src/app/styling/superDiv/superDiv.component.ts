import {Component, HostListener, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ITheme, JssStyleService} from "../jssStyle.service";
import {IBreakingStyle, JssStyle} from "../model";

@Component({
    selector: 'sDiv',
    template: '<ng-content></ng-content>',
})

export class SuperDivComponent implements OnInit {

    @Input() jssStyle: JssStyle;

    theme: ITheme;

    superDivElement: HTMLElement;

    public getScreenWidth: number;

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        this.applyStylesToElement(this.superDivElement);
    }

    constructor(private mimStyleService: JssStyleService, private vcr: ViewContainerRef) {
        this.theme = mimStyleService.themeSettings();
        this.superDivElement = vcr.element.nativeElement;
    }

    ngOnInit(): void {
        this.onWindowResize();
    }

    applyStylesToElement(el: HTMLElement): void {
        if (this.jssStyle) {
            Object.keys(this.jssStyle)?.forEach(key => {
              // @ts-ignore
              el.style[key] = this.applyStyle(this.jssStyle[key])
            })
        }

    }

    applyStyle(styleValue: IBreakingStyle | string | undefined, defaultValue: string = ''): string {
        let style: string | undefined = "";
        switch (typeof styleValue) {
            case 'undefined':
                return style;
            case 'string':
                return styleValue ? styleValue : defaultValue;
            case 'object':
                Object.keys(styleValue)?.forEach(key => {
                    if ((key === 'xs' || key === 'sm' || key === 'md' || key === 'lg' || key === 'xl')
                        && (styleValue[key] && this.getScreenWidth > this.theme.breakpoints[key])) {
                        style = styleValue[key];
                    }
                })
                break;
        }
        return style
    }


}
