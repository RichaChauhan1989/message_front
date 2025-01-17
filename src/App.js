// import logo from './logo.svg';
// import './App.css';
// import TopBar from "./components/TopBar";
// import {Router} from "react-router";
// import Home from "./components/Home";
// import {Routers} from "react-router";
// import Chatroom from "./components/Chatroom";
// import {useState} from "react";
//
// function App() {
//   return (
//     <div className="App">
//         <TopBar/>
//       <Routers>
//           <Router path="/" element={<Home/>} location={}/>
//           <Router path="/chatroom" element={<Chatname/>}/>
//       </Routers> navigator={}
//     </div>
//   );
// }
//
// export default App;
//import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Chatroom from "./components/ChatRoom";
import NumberSumUp from "./components/NumberSumUp";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chatroom" element={<Chatroom/>}/>
            <Route path="/sumupnum" element={<NumberSumUp/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
        {/*<Chatroom/>*/}
      {/*<button classRoom={"btn btn-primary"}>*/}
      {/*  Submit</button>*/}
    </div>
  );
}

export default App;
