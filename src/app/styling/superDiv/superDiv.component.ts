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

    @Input() p?: number;
    @Input() color?: string;
    @Input() bgColor?: string;
    @Input() width?: IBreakingStyle | string;
    @Input() dFlex?: boolean = true;
    @Input() justifyContent?: IBreakingStyle | string;

    @Input() flexDirection?: IBreakingStyle | string;


    theme: ITheme;

    boxEl: HTMLElement;

    public getScreenWidth: number;

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        console.log('win ' + window.innerWidth)
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

    applyStylesToElement(element: any): void {
        element.style.display = this.dFlex ? 'flex' : ''
        element.style.padding = this.p ? this.theme.spacing(this.p) : '';
        element.style.color = this.color && this.applyStyle(this.color);
        element.style.backgroundColor = this.bgColor && this.applyStyle(this.bgColor);
        element.style.width = this.width  && this.applyStyle(this.width);
        element.style.justifyContent = this.justifyContent && this.applyStyle(this.justifyContent);
        element.style.flexDirection = this.flexDirection && this.applyStyle(this.flexDirection, 'row')
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
                }
                else if (styleValue.lg && this.getScreenWidth > this.theme.breakpoints.lg) {
                    style = styleValue.lg;
                }
                else if (styleValue.md && this.getScreenWidth > this.theme.breakpoints.md) {
                    style = styleValue.md;
                }
                else if (styleValue.sm && this.getScreenWidth > this.theme.breakpoints.sm) {
                    style = styleValue.sm;
                }
                else if (styleValue.xs && this.getScreenWidth > this.theme.breakpoints.xs) {
                    style = styleValue.xs;
                }
                else {
                    style = defaultValue ? defaultValue : '';
                }
                break;

        }
        return style
    }


}
