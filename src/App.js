import "./App.css";
import { Toast } from "./frontend/components";
import { Main } from "./frontend/layouts/Main";
import { Navbar } from "./frontend/layouts/Navbar";
import { SimpleSidebar } from "./frontend/layouts/Sidebar";


function App() {

  return (
    <div className="app">
      <Toast/>
      <Navbar/>
      <div className="app-container">
        <SimpleSidebar/>
        <Main/>
        
      </div>
    </div>
  );
}

export default App;
