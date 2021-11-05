import { Injectable } from '@angular/core';


export interface  IThemeSettings{
  spacing:{
    p1:string,
    p2:string,
    p3:string,
    p4:string,
    p5:string,
  };
  typography:{
    h6:string,
    body:string
  };
  palette:{
    primary:string
  }
}

export interface  IStyled{
  p1: {  };
  p2: {  };
  bgColor: (color:string)=>{backgroundColor:string}
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  themeSettings(): IThemeSettings{
    return {
      spacing:{
        p1: '1rem',
        p2: '2rem',
        p3: '3rem',
        p4: '4rem',
        p5: '5rem'
      },
      typography:{
        h6:'font-size:14, font-weight:400',
        body:'font-size:12'
      },
      palette:{
        primary:'red'
      }
    }

  }

  setStyled ():IStyled{
    return {
      p1 : {padding: this.themeSettings().spacing.p1},
      p2 : {padding: this.themeSettings().spacing.p2},
      bgColor: color => {return {backgroundColor:color}}

  }}


}
