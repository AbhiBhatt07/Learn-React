import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState();
  const [color2, setColor2] = useState();

  const changeColor = () => {
    setColor(`${color}`);
    setColor2(`${color2}`);
  };

  return (
    <>
      <div
        className="w-full bg-red-400 justify-center flex h-screen"
        // style={{ backgroundColor: color }}
        style={{
          backgroundImage: `linear-gradient(to right, ${color}, ${color2})`,
        }}
      >
        <h1 className="mt-5 text-[30px] font-semibold h-[100px] p-8  bg-slate-900 text-white">
          This is The Background changer
        </h1>
        <div
          className="flex fixed bottom-7 justify-center flex-wrap px-7 py-5 gap-4 bg-violet-500 
         rounded-2xl text-slate-600 text-2xl "
        >
          <button
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"
            // onClick={() => setColor("MistyRose")}
            onClick={changeColor}
          >
            MistyRose
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            // style={{ backgroundColor: "	Teal" }}
            onClick={() => setColor("pink, orange")}
          >
            Teal
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "PowderBlue" }}
            onClick={() => setColor("PowderBlue, green")}
          >
            PowderBlue
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "MidnightBlue" }}
            onClick={() => setColor("MidnightBlue, brown")}
          >
            MidnightBlue
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "Brown" }}
            onClick={() => setColor("Brown, white")}
          >
            Brown
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "#313131" }}
            onClick={() => setColor("#313131, yellow")}
          >
            Dark
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
