import {useState} from "react";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Sidebar} from "./pages/global/Sidebar";
import {Topbar} from "./pages/global/Topbar";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/dashboard";
import {Team} from "./pages/team";
import {Contacts} from "./pages/contacts";
import {Invoices} from "./pages/invoices";
import {Form} from "./pages/form";
import {Calendar} from "./pages/calendar";
import { Bar } from "./pages/bar";
import {Pie} from "./pages/pie";
import {Line} from "./pages/line";
import { FAQ } from "./pages/faq";
import {Geography} from "./pages/geography";

function App() {
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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
