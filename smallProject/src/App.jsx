import { useState } from "react";
import "./App.css";

function App() {
  // var counter = 10;
  let [counter, funtionOfCounter] = useState(10);
  /*yai jo mene array brecket main jo 2 values likha hain na first vala to mera variable hain aur 
    second vala value jo hain vo ek function hain jo aapke first vale value per kaam karta hain.
  */

  let addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      funtionOfCounter(counter + 1);
      // console.log(counter);
    } else {
      console.log("Your Values Is Grater then 20");
    }
  };
  let removeValue = () => {
    if (counter > 0) {
      // counter = counter - 1;
      funtionOfCounter(counter - 1);
      // console.log(counter);
    } else {
      console.log("Your value is less than 0 ");
    }
  };
  return (
    <>
      <h3>Count:{counter}</h3>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
      <p>Currunt Value is: {counter}</p>
    </>
  );
}

export default App;
