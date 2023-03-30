import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      headerFooter: string
      text: string
      red: {
        lighter: string
        light: string
        main: string
        dark: string
      },
   }
  }
}
