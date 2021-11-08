import {Component, HostListener, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ITheme, MimStyleService} from "../mimStyle.service";

export interface IBreakingStyle {
    xs?: string,
    sm?: string,
    md?: string,
    lg?: string,
    xl?: string,

}

@Component({
    selector: 'sDiv',
    templateUrl: './superDiv.component.html',
    styleUrls: ['./box.component.scss']
})

export class SuperDivComponent implements OnInit {

    @Input() dFlex?: boolean = true;
    @Input() p?: IBreakingStyle | string;
    @Input() color?: IBreakingStyle | string;
    @Input() bgColor?: IBreakingStyle | string;
    @Input() width?: IBreakingStyle | string;
    @Input() justifyContent?: IBreakingStyle | string;
    @Input() flexDirection?: IBreakingStyle | string;

    theme: ITheme;

    boxEl: HTMLElement;

    public getScreenWidth: number;

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        this.applyStylesToElement(this.boxEl);
    }

    constructor(private mimStyleService: MimStyleService, private vcr: ViewContainerRef) {
        this.theme = mimStyleService.themeSettings();
        this.boxEl = vcr.element.nativeElement;
    }

    ngOnInit(): void {
        this.onWindowResize();
    }

    applyStylesToElement(el: HTMLElement): void {
        el.style.display = this.dFlex ? 'flex' : '';
        el.style.padding = this.p ? this.applyStyle(this.p) : '';
        el.style.color = this.color ? this.applyStyle(this.color) : '';
        el.style.backgroundColor = this.bgColor ? this.applyStyle(this.bgColor) : '';
        el.style.width = this.width ? this.applyStyle(this.width) : '';
        el.style.justifyContent = this.justifyContent ? this.applyStyle(this.justifyContent) : '';
        el.style.flexDirection = this.flexDirection ? this.applyStyle(this.flexDirection, 'row') : '';
    }

    applyStyle(styleValue: IBreakingStyle | string, defaultValue: string = ''): string {
        let style: string = "";
        switch (typeof styleValue) {
            case 'undefined':
                return style;

            case 'string':
                return styleValue ? styleValue : defaultValue;

            case 'object':
                if (styleValue.xl && this.getScreenWidth > this.theme.breakpoints.xl) {
                    style = styleValue.xl;
                } else if (styleValue.lg && this.getScreenWidth > this.theme.breakpoints.lg) {
                    style = styleValue.lg;
                } else if (styleValue.md && this.getScreenWidth > this.theme.breakpoints.md) {
                    style = styleValue.md;
                } else if (styleValue.sm && this.getScreenWidth > this.theme.breakpoints.sm) {
                    style = styleValue.sm;
                } else if (styleValue.xs && this.getScreenWidth > this.theme.breakpoints.xs) {
                    style = styleValue.xs;
                } else {
                    style = defaultValue ? defaultValue : '';
                }
                break;

        }
        return style
    }


}
