import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/pages/global/Topbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import UserLogin from "./components/pages/UserLogin";
// import About from "./components/pages/about/About";
// import Home from "./components/pages/home/Home";

//Commiting
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  const [theme, colorMode]= useMode();

  return (
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />

    <div className="app">
      <main className="content">
        <Topbar />
      </main>

    </div>
    </ThemeProvider>
   </ColorModeContext.Provider>
  );
}

export default App;
