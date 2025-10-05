import { useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const passwordRef = useRef(null);


  // const copyPasswordToClipboard = useCallback(()=>{
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(password);
  // },[password])

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[];'";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Copy Password to Clipboard
  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("✅ Password copied to clipboard!");
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-2xl font-bold text-white mb-4">
          🔐 Password Generator
        </h1>

        {/* Password Display + Buttons */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-2 px-3 text-white bg-gray-700"
            placeholder="Generated password"
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-green-500 hover:bg-green-600 text-white px-3"
          >
            Copy
          </button>
          <button
            onClick={passwordGenerator}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4"
          >
            Generate
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-y-3 text-sm text-white">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label htmlFor="lengthRange">Length: {length}</label>
            <input
              type="range"
              id="lengthRange"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer w-2/3"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Number Checkbox */}
          <div className="flex items-center justify-between">
            <label htmlFor="numberInput">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="numberInput"
            />
          </div>

          {/* Character Checkbox */}
          <div className="flex items-center justify-between">
            <label htmlFor="CharacterInput">Include Special Characters</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="CharacterInput"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
