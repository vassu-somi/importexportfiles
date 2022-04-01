import React from "react";
import "./styles.css";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <Subheading />
      <Heading />
      <SubmitButton />
    </div>
  );
}
