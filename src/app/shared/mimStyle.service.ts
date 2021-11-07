import {Injectable} from '@angular/core';

export interface ITheme {

  spacing: (val:number)=>string;
  typography: {
    h6: string,
    body: string
  };
  palette: {
    primary: {
      main: string,
      light?: string,
      dark?: string,
      contrastText: string,
    },
    secondary: {
      main: string,
      light?: string,
      dark?: string,
      contrastText?: string,
    },
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
        primary: {
          main: '#30a5af',
          light: '#49bab7',
          dark: '#2eb6dc',
          contrastText: '#f9fff7',
        },
        secondary: {
          main: '#2eb6dc',
        },
        error: 'orange'
      }
    }
  }
}

