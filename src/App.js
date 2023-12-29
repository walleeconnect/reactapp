
import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;