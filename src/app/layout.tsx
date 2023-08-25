import '../styles/globals.css';
import * as React from 'react';

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
      <body>{children}</body>
    </html>
  );
}
