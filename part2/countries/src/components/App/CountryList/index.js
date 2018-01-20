import React from 'react'

import Country from './Country'
import CountryShortList from './CountryShortList';
import ResultInfo from './ResultInfo'

export default ({ countries, onCountryClick }) => {
  if (countries.length === 0) {
    return <ResultInfo message="No matches found" />
  }
  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }
  if (countries.length < 10) {
    return (
      <div>
        {
          countries.map(c => {
            return (
              <div key={c.name} onClick={() => onCountryClick(c)}>
                <CountryShortList key={c.name} country={c} />
              </div>
            )
          })
        }
      </div>
    )
  }
  return <ResultInfo message="Too many matches, please specify filter" />
}
