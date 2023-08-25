import '../styles/globals.css';
import * as React from 'react';
import ThemeContainer from '@/app/container';

export const metadata = {
  title: 'Admin Dashboard Application',
  description:
    'It is a learning project. It showcase the Admin Dashboard bootstrap using Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContainer>{children}</ThemeContainer>
      </body>
    </html>
  );
}
