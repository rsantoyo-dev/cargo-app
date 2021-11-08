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

    @Input() display?: IBreakingStyle | string;
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

        el.style.backgroundColor = this.bgColor ? this.applyStyle(this.bgColor) : '';
        el.style.color = this.color ? this.applyStyle(this.color) : '';
        el.style.padding = this.p ? this.applyStyle(this.p) : '';
        el.style.width = this.width ? this.applyStyle(this.width) : '';
        //flex
        el.style.display = this.display ? this.applyStyle(this.display) : '';
        el.style.flexDirection = this.flexDirection ? this.applyStyle(this.flexDirection, 'row') : '';
        el.style.justifyContent = this.justifyContent ? this.applyStyle(this.justifyContent) : '';

    }

    applyStyle(styleValue: IBreakingStyle | string, defaultValue: string = ''): string {
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
