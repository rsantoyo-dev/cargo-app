import { Component, OnInit } from '@angular/core';
import {IStyled, ThemeService} from "../theme.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  styled:IStyled;
  constructor(private themeService:ThemeService) {
    this.styled=themeService.setStyled();
  }

  ngOnInit(): void {

  }

}
