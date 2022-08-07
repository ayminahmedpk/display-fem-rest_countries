import React, { Component } from 'react'
import { Countries } from '../../Redux/features/countries/CountriesTypes'

import { connect } from 'react-redux'

import { ThunkDispatch } from 'redux-thunk'
import { ActionsType, StateType } from '../../Redux/store'

import { fetchCountries } from '../../Redux/features/countries/countriesActionCreators'

import CountryCard from '../CountryCard/CountryCard';


type CountriesPanelProps = {
  countries      : Countries | null;
  loading        : boolean;
  fetchCountries : () => void;
}

type CountriesPanelState = {
  region: string;
}


class CountriesPanel extends Component<CountriesPanelProps, CountriesPanelState> {

  constructor(props: CountriesPanelProps) {
    super(props)
  
    this.state = {
       region: 'all',
    }
  }

  componentDidMount() {
    this.props.fetchCountries();
  }

  selectionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({region: event.target.value});
  }

  render() {

    let listOfCountries = null;

    if (this.props.countries) {
      
      const filteredCountries = (this.state.region === 'all') ? this.props.countries :
      this.props.countries.filter((country) => (country.region === this.state.region));

      // listOfCountries = filteredCountries.map(country => (
      //   <p key={country.name.common}>{country.name.common}</p>
      // ))
      listOfCountries = filteredCountries.map(country => (
        <CountryCard
          key        = {country.name.common}
          flagURL    = {country.flags.svg}
          name       = {country.name.common}
          population = {country.population}
          region     = {country.region}
          capital    = {country.capital}
        />
      ))
      
    }

    return (
      <>
        <button onClick={this.props.fetchCountries}>Make call</button>
        <p>Select region:</p>
        <select data-testid='select-bar' value={this.state.region} onChange={this.selectionHandler}>
          <option value="all">[All]</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        {this.props.loading? <p>Loading...</p>: ''}
        {listOfCountries?  <p>List of countries ({listOfCountries.length}):</p> : '' }
        {listOfCountries? listOfCountries : ''}
      </>
    )
  }
}

const mapStateToProps = (state:StateType) => ({
  countries : state.countries.countries,
  loading   : state.countries.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateType, {}, ActionsType>
) => ({
  fetchCountries: () => dispatch(fetchCountries()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPanel);