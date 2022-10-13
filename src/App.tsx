import React from 'react';
import './App.css';
import Screens from "./screens";
import Login from "./LoginScreen/login";
import Register from "./LoginScreen/register";

function App() {
  return (
      <div className="App">
        {/*<Screens/>*/}
        {/*  <Login/>*/}
          <Register/>
      </div>
  );
}

export default App;
