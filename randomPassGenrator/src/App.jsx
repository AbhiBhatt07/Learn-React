import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  // this is the variable, function and states
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [bgcolor, setBgColor] = useState();
  const [password, setPassword] = useState("cjbvvvjvbvb");

  const passwordRefrence = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOSPQRSTUVWXYZabcdefgjklmnopqrstuvwxyz";
    // password genrator logic
    if (number) str += "0123456789";
    if (specialChar) str += "!@#$%^&_-=`~*{}[]";

    for (let i = 0; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(character);
      // charAt Hover on and read the work of charAt
    }

    setPassword(pass);
  }, [length, number, specialChar, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRefrence.current?.select();
    passwordRefrence.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, specialChar, passwordGenerator]);

  const clickToChange = () => {
    setBgColor("lightBlue");
  };

  const bothCall = () => {
    copyToClipBoard();
    clickToChange();
  };
  return (
    <>
      <div className="bg-black p-5  justify-center flex ">
        <div className="p-5 bg-gray-600 w-[50%]   rounded-lg mt-20">
          <div className="flex">
            <input
              style={{ backgroundColor: bgcolor }}
              type="text"
              value={password}
              readOnly
              className="w-full p-2 text-2xl font-semibold outline-0 rounded-md bg-stone-500"
            />
            <button
              onClick={bothCall}
              className="bg-blue-500 p-4 rounded-md text-xl font-bold ms-2"
            >
              Copy
            </button>
          </div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="mt-5 ms-3 me-1 cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={number}
            className="ms-3 me-1"
            id="number"
            onChange={() => {
              setNumber((previous_Boolean_Value) => {
                return !previous_Boolean_Value;
              });
            }}
          />
          <label htmlFor="number">Number</label>

          <input
            type="checkbox"
            defaultChecked={specialChar}
            id="Sc"
            className="my-3 ms-3 me-1"
            onChange={() => {
              // setSpecialChar(
              //   (previous_Boolean_Value) => !previous_Boolean_Value
              // );
              setSpecialChar((previous_Boolean_Value) => {
                return !previous_Boolean_Value;
              });
            }}
          />
          <label htmlFor="Sc">Special Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
