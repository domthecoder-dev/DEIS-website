import { useState } from 'react';

export default function Password() {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [easyToSay, setEasyToSay] = useState(false);
  const [easyToRead, setEasyToRead] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (easyToSay) charset = charset.replace(/[0O1Il]/g, '');
    if (easyToRead) charset = charset.replace(/[|!Il1O0]/g, '');

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">
          Generate A Strong/Unique Password Now!
        </h1>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <button
            onClick={generatePassword}
            className="btn-primary text-xl px-8 py-4 w-full"
          >
            Generate A Password!
          </button>

          {password && (
            <div className="mt-6 p-4 bg-white rounded border text-center">
              <p className="font-mono text-lg break-all">{password}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Customize Password Requirements:</h2>

          <div>
            <label className="block font-medium mb-2">Password Length: {length}</label>
            <input
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={easyToSay} onChange={(e) => setEasyToSay(e.target.checked)} />
              <span>Easy to Say</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={easyToRead} onChange={(e) => setEasyToRead(e.target.checked)} />
              <span>Easy to Read</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />
              <span>Uppercase</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} />
              <span>Lowercase</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
              <span>Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
              <span>Special Characters</span>
            </label>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <p className="text-sm">
            <strong>Important Security Note:</strong> All passwords generated here are created entirely at random. We do not store or log any generated passwords, and they are immediately cleared upon page reload or when you click the generate button again. Your privacy and security are our top priority.
          </p>
        </div>
      </div>
    </div>
  );
}