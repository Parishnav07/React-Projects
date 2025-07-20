// 1 . Create a new React app
// 2 . Createa a App.jsx component
// 3.  Create a Header.jsx component that render a <header> element
// to show Keeper app name in an <h1>
// 4. Create a Footer.jsx component that render a <fotter> element
// to show a copywrite message in a <p> with a dynamic update year
// 5. Create a Note.jsx component to show a <div> element with a
// <h1> for a title and <p> for a paragraph
// 6. Make sure that a final website is style like a example shown here
// https://w00gz.csb.app/

// Note : You will need to study the classes in the style.css to apply styling

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
