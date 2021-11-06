import {Injectable} from '@angular/core';
import {NgStyle} from "@angular/common";
import {CssRule} from "@angular/compiler/src/shadow_css";
import {CssSelector} from "@angular/compiler";
import {ClassDeclaration} from "@angular/compiler-cli/src/ngtsc/reflection";
import {StyleBuilder} from "@angular/flex-layout";
import {MSO} from "./mimStyleOptions";



export interface ITheme {
  spacing: {
    _1: string,
    _2: string,
    _3: string,

  };
  typography: {
    h6: string,
    body: string
  };
  palette: {
    primary: string,
    secondary:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class MimStyleService {

  constructor() {
  }

  themeSettings(): ITheme {
    return {
      spacing: {
        _1: '1rem',
        _2: '2rem',
        _3: '3rem',


      },
      typography: {
        h6: 'font-size:14, font-weight:400',
        body: 'font-size:12'
      },
      palette: {
        primary: 'red',
        secondary: 'blue',
      }
    }

  }


  set(shortStyles:Array<string>): {} {
    let styles = {};
    shortStyles.forEach(style => {
      switch (style) {
        case MSO.p1: {
          styles = {...styles, padding: this.themeSettings().spacing._1}
          break
        }
        case MSO.p2: {
          styles = {...styles, padding: this.themeSettings().spacing._2}
          break
        }
        case MSO.bgPrimary: {
          styles = {...styles, backgroundColor: this.themeSettings().palette.primary}
          break
        }
        case MSO.bgSecondary: {
          styles = {...styles, backgroundColor: this.themeSettings().palette.secondary}
          break
        }
        case MSO.w100: {
          styles = {...styles, width: '100%'}
          break
        }
      }
    })
    return styles
  }

}

