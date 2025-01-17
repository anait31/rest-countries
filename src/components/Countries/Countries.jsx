import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({handleVisitedCountryList}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountryList={handleVisitedCountryList}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;