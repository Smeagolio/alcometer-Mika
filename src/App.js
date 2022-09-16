import { useState } from 'react';
import './App.css';

function App() {
  const [Weight, setWeight] = useState()
  const [Bottles, setBottles] = useState()
  const [Time, setTime] = useState()
  const [Gender, setGender] = useState()
  const [Alco, setAlco] = useState(0)
  
  const alcoresult = (e) => {
    e.preventDefault();
    const litres = Bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = Weight / 10
    const left = grams - (burning * Time)
    const Result = left / (Weight * 0.7)
      setAlco(Result)


  }
  return (
    <div>
      <h3>Alcometer</h3>
      <form onSubmit={alcoresult}>
        <div>
          <label>weight</label>
          <input type="number" value={Weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" value={Bottles} onChange={e => setBottles(e.target.value)} />
        </div>
        <div>
          <label>Time</label>
          <input type="number" value={Time} onChange={e => setTime(e.target.value)} />
        </div>
        <div>
          <label>Gender</label>
          <select value={Gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div><output>Male Alcometer result = {Alco}</output></div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
