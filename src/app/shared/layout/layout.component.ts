import { Component, OnInit } from '@angular/core';
import {ITheme, ThemeService} from "../theme.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  theme:ITheme
  constructor(private themeService:ThemeService) {
    this.theme=themeService.getTheme()
  }

  ngOnInit(): void {

  }

}
