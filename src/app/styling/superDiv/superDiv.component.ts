import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ITheme, MimStyleService} from "../mimStyle.service";

@Component({
  selector: 'sDiv',
  templateUrl: './superDiv.component.html',
  styleUrls: ['./box.component.scss']
})

export class SuperDivComponent implements OnInit {

  @Input() p?: number;
  @Input() color?: string;
  @Input() bgColor?: string;
  @Input() width?: number;
  @Input() dFlex?: boolean = true;
  @Input() justifyContent?: string;


  theme:ITheme;

  boxEl: HTMLElement

  constructor(private mimStyleService:MimStyleService, private vcr:ViewContainerRef) {
    this.theme=mimStyleService.themeSettings();
    this.boxEl = vcr.element.nativeElement;
  }

  ngOnInit(): void {
   this.applyStylesToElement(this.boxEl)
  }

  applyStylesToElement(element:any):void{
    element.style.padding =  this.p ? this.theme.spacing(this.p) : '';
    element.style.color =  this.color ? this.color : ''
    element.style.backgroundColor =  this.bgColor ? this.bgColor : ''
    element.style.width =  this.width ? this.width+'%' : ''
    element.style.display =  this.dFlex ? 'flex' : ''
    element.style.justifyContent =  this.justifyContent ? this.justifyContent : ''
  }

}
