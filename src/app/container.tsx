'use client';

import * as React from 'react';
import { useState } from 'react';
import { ColorModeContext, useMode } from '@/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function ThemeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main className="content pb-25">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
