import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {
  const [count, setCount] = useState(0);
  const [visitedCountry, setVisitedCountry] = useState([]);

  function handleVisitedCountryList (country) {
    const visitedCountryList = [...visitedCountry, country]
    setVisitedCountry(visitedCountryList);
}
console.log(visitedCountry);

  return (
    <>
      <h1>React World Tour</h1>
      <div>
        <h2>My Visited Country List</h2>
        <ul>
          {
            visitedCountry.map(countryVisited => <li>{countryVisited.name.common} <img src={countryVisited.flags.png} alt="" /></li>)
          }
        </ul>
      </div>
      <Countries handleVisitedCountryList={handleVisitedCountryList}></Countries>
    </>
  )
}

export default App
