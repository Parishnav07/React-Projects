import React from "react";
import Form from "./From";
let isUserRegister = true;

function App() {
  return (
    <div className="container">
      <Form registered={isUserRegister} />;
    </div>
  );
}

export default App;
