import {Injectable} from '@angular/core';

export interface ITheme {

  spacing: (val:number)=>string;
  typography: {
    h6: string,
    body: string
  };
  palette: {
    primary: string,
    secondary:string,
    error:string
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
      spacing: (factor) => `${0.25 * factor}rem`,
      typography: {
        h6: 'font-size:14, font-weight:400',
        body: 'font-size:12'
      },
      palette: {
        primary: 'red',
        secondary: 'blue',
        error: 'orange'
      }
    }
  }
}

