import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    commonColors: {
      [key: string]: string;
    };
  }

  interface PaletteOptions {
    commonColors?: {
      [key: string]: string;
    };
  }
}
