import React from 'react'
import axios from 'axios'

import SearchInput from './SearchInput'
import AppTitle from './AppTitle'
import SearchError from './SearchError'
import CountryList from './CountryList'

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      countries: [],
      error: ''
    }
  }

  componentWillMount() {
    axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/all`)
          .then(response => {
            this.setState({ countries: response.data})
          }).catch(e => {
            this.setState({ error: `There was a problem fetching countries: ${e.message}` })
          })
  }

  onSearchStringChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  onCountryClick = (country) => {
    this.setState({ searchString: country.name })
  }

  render() {
    const countriesToShow = this.state.countries.filter(c => c.name.toLowerCase().includes(this.state.searchString.trim().toLowerCase()))
    return (
      <div>
        <AppTitle title="Countrie" />
        <SearchInput
          text="find countries"
          value={this.state.searchString}
          onChange={this.onSearchStringChange}
        />
        <SearchError error={this.state.error}/>
        <CountryList countries={countriesToShow} onCountryClick={this.onCountryClick} />
      </div>
    )
  }
}
