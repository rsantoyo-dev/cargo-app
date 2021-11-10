import {Component, OnInit} from '@angular/core';
import {JssStyleService} from "../../styling/jssStyle.service";
import {ITheme} from "../../styling/model";

@Component({
  selector: 'app-layout',
  template: `
    <div [sJss]="{
      display:'flex',
      flexDirection:{xs:'column', md:'row'}
      }">
      <div [sJss]="
        {display:'flex',
        flexDirection:'column',
        width:{xs:'100%', md:'35%'}}">
        <div [sJss]="{display:'flex',
          justifyContent:'center',
          padding:{xs:theme.spacing(2), md:theme.spacing(5)},
          backgroundColor:theme.palette.primary.main,
          color:theme.palette.primary.contrastText
          }">
          <span [sJss]="{padding:theme.spacing(1),
            backgroundColor:{xs:theme.palette.primary.light, md:theme.palette.primary.dark}}">Hello world
          </span>
        </div>
        <app-get-address></app-get-address>
        <app-package-details></app-package-details>
        <app-weigh-details></app-weigh-details>
        <app-shipping-summary></app-shipping-summary>
      </div>
      <app-map-view fxFlex></app-map-view>
    </div>`
})

export class LayoutComponent implements OnInit {

  theme: ITheme;

  constructor(private jssStyleService: JssStyleService) {
    this.theme = jssStyleService.theme();
  }

  ngOnInit(): void {

  }

}
