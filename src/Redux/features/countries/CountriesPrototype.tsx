import React, { Component } from 'react'
import { Countries } from './CountriesTypes'

import { connect } from 'react-redux'

import { ThunkDispatch } from 'redux-thunk'
import { ActionsType, StateType } from '../../store'

import { fetchCountries } from './countriesActionCreators'


type CountriesPrototypeProps = {
  countries      : Countries;
  loading        : boolean;
  fetchCountries : () => void;
}

type CountriesPrototypeState = {
  region: string;
}


class CountriesPrototype extends Component<CountriesPrototypeProps, CountriesPrototypeState> {

  constructor(props: CountriesPrototypeProps) {
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

      listOfCountries = filteredCountries.map(country => (
        <p key={country.name.common}>{country.name.common}</p>
      ))
      
    }

    return (
      <>
        <button onClick={this.props.fetchCountries}>Make call</button>
        <p>Select region:</p>
        <select value={this.state.region} onChange={this.selectionHandler}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPrototype);