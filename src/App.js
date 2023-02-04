import "./App.css";
import Homepage from "./Pages/Homepage";
// import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} /> */}

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/chats" element={<Chatpage></Chatpage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
