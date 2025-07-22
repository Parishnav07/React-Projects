import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="UserName" />
      <input type="password" placeholder="Password" />
      {/* {props.registered === false && (
        <input type="password" placeholder="Confirm Password" />
      )} */}

      {!props.registered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit"> {props.registered ? "Login" : "Register"} </button>
    </form>
  );
}

export default Form;
