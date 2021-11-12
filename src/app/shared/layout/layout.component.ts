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
    const th:ITheme = {...this.theme}
    th.palette.primary.main="#004499"
    this.jssStyleService.setTheme(th)
  }
  clicked(){


  }

}
