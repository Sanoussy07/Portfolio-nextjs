"use client";

import type { Metadata } from "next";
import Header from '@/Component/Header';
import Footer from '@/Component/Footer';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
