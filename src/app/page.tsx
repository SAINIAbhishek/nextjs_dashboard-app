'use client';

import { useState } from 'react';
import { ColorModeContext, useMode } from '@/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Sidebar } from '@/components/sidebar';
import { Topbar } from '@/components/topbar';

export default function Home() {
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
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
