import { Injectable } from '@angular/core';


export interface  ITheme{
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
  }
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  getTheme(): ITheme{
    return {
      spacing:{
        p1: '1rem',
        p2: '2rem',
        p3: '3rem',
        p4: '4rem',
        p5: '1rem'
      },
      typography:{
        h6:'font-size:14, font-weight:400',
        body:'font-size:12'
      }
    }

  }

  p1 = {
    padding: '3em',
  }

}
