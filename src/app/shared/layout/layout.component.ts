import { Component, OnInit } from '@angular/core';
import {ITheme, JssStyleService} from "../../styling/jssStyle.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  theme:ITheme;


  constructor(private mimStyleService:JssStyleService) {
    this.theme=mimStyleService.themeSettings();
  }

  ngOnInit(): void {

  }

}
