import { Component, OnInit } from '@angular/core';
import {JssStyleService} from "../../styling/jssStyle.service";
import {ITheme} from "../../styling/model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  theme:ITheme;

  constructor(private jssStyleService:JssStyleService) {
    this.theme=jssStyleService.theme();

  }

  ngOnInit(): void {

  }

}
