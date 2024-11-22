'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { Quicksand } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Lato } from 'next/font/google';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>DCLM Testimonial</title>
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body
          className={`${quicksand.className} ${inter.className} ${lato.className}`}
        >
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
