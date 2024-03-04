import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div
        className="w-full bg-red-400 justify-center flex h-screen"
        style={{ backgroundColor: color }}
      >
        <h1 className="mt-5 text-[30px] font-semibold h-[100px] p-8 bg-slate-900 text-white">This is The Background changer</h1>
        <div
          className="flex fixed bottom-7 justify-center flex-wrap px-7 py-5 gap-4 bg-violet-500 
         rounded-2xl text-slate-600 text-2xl "
        >
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "MistyRose" }}
            onClick={() => setColor("MistyRose")}
          >
            MistyRose
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "	Teal" }}
            onClick={() => setColor("	Teal")}
          >
            Teal
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "PowderBlue" }}
            onClick={() => setColor("PowderBlue")}
          >
            PowderBlue
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "MidnightBlue" }}
            onClick={() => setColor("MidnightBlue")}
          >
            MidnightBlue
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "Brown" }}
            onClick={() => setColor("Brown")}
          >
            Brown
          </button>
          <button
            className="p-3 bg-red-700 rounded-2xl"
            style={{ backgroundColor: "#313131" }}
            onClick={() => setColor("#313131")}
          >
            Dark
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
