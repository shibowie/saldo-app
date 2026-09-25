import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "soft");

  useEffect(() => {
    if (theme === "soft") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;