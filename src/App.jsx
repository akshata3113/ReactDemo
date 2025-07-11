import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          🔐 Password Generator
        </h1>

        <div className="flex mb-4 shadow-md rounded overflow-hidden">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full py-2 px-4 text-black text-lg font-mono outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 text-sm font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-sm">
              Password Length: <span className="font-bold">{length}</span>
            </label>
            <input
              id="length"
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="h-4 w-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
