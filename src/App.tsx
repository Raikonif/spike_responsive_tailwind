import Menu from "./components/Menu";
import { useState } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./i18n";

function App() {
  const [changePage, setChangePage] = useState<string>("HOME");

  return (
    <>
      <div className="min-h-screen">
        <Menu selected={changePage} setSelected={setChangePage} />
        <div className="w-full pt-32 sm:pt-20 items-center justify-center p-1">
          {changePage == "HOME" && <Home />}
          {changePage == "BLOG" && <Blog />}
          {changePage == "ABOUT" && <About />}
        </div>
      </div>
    </>
  );
}

export default App;
