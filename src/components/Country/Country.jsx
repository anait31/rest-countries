import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountryList }) => {
    const { name, flags } = country;

    const [visited, setVisited] = useState(false);

    function handleVisitedCountry () {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited-country-bg'}`}>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <div>
                <button onClick={handleVisitedCountry} className={`btn-visit ${visited ? 'visited-country' : ''}`}>{visited? 'Visited' : 'Going'}</button>
                {
                    visited ? <span>I have visited</span> : <span>I Want to visit</span>
                }
                <div>
                    <button onClick={() => handleVisitedCountryList(country)} className='btn-country'>Country</button>
                    <button>Flags</button>
                </div>
            </div>
        </div>
    );
};

export default Country;