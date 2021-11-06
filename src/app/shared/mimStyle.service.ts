import {Injectable} from '@angular/core';
import {NgStyle} from "@angular/common";
import {CssRule} from "@angular/compiler/src/shadow_css";
import {CssSelector} from "@angular/compiler";
import {ClassDeclaration} from "@angular/compiler-cli/src/ngtsc/reflection";
import {StyleBuilder} from "@angular/flex-layout";
import {MSO} from "./mimStyleOptions";


export interface IThemeSettings {
  spacing: {
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
  };
  typography: {
    h6: string,
    body: string
  };
  palette: {
    primary: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class MimStyleService {

  constructor() {
  }

  themeSettings(): IThemeSettings {
    return {
      spacing: {
        p1: '1rem',
        p2: '2rem',
        p3: '3rem',
        p4: '4rem',
        p5: '5rem'
      },
      typography: {
        h6: 'font-size:14, font-weight:400',
        body: 'font-size:12'
      },
      palette: {
        primary: 'red'
      }
    }

  }


  set(shortStyles:Array<string>): {} {
    let styles = {};
    shortStyles.forEach(style => {
      switch (style) {
        case MSO.p1: {
          styles = {...styles, padding: '10px'}
          break
        }
        case MSO.bgPrimary: {
          styles = {...styles, backgroundColor: 'red'}
          break
        }
      }
    })
    return styles
  }

}

