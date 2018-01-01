import React from 'react'

export default ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        width="40%"
        height="40%"
      />
    </div>
  )
}
