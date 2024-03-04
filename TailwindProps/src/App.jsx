import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0)
  let Myobject = {
    userName: 'Abhishek',

  }
  let Myarr = [10, 20, 30];

  return (
    <>
      <h1 className="mb-10 bg-teal-300 text-black p-5 rounded-xl cursor-pointer">
        React with Tailwind
      </h1>
      <Card nameObject="Learn react" Myobject={Myobject} MyArray={Myarr} btntext="Click here"/>
      <Card nameObject="Mackbook pro" btntext="Click here"/>
      <Card nameObject="Mackbook 12" />
    </>
  );
}

export default App;
