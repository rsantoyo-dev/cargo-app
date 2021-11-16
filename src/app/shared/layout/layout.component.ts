import { Component, OnInit } from '@angular/core';
import {ITheme, NgxSjssService} from "ngx-sjss";




@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})

export class LayoutComponent implements OnInit {

  theme:ITheme;

  constructor(private jssStyleService:NgxSjssService) {
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
