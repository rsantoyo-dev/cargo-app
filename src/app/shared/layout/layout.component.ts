import { Component, OnInit } from '@angular/core';
import {JssStyleService} from "../../styling/jssStyle.service";
import {ITheme} from "../../styling/model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})

export class LayoutComponent implements OnInit {

  theme:ITheme;

  constructor(private jssStyleService:JssStyleService) {
    this.theme=jssStyleService.theme();
  }

  ngOnInit(): void {
  }
  clicked(){
    const themeUpdate:ITheme = {...this.theme}
    themeUpdate.palette.primary.main="red"
    this.jssStyleService.setTheme(themeUpdate)

  }


}
