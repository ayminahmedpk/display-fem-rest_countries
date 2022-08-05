import React, { Component } from 'react'
import { Countries } from './CountriesTypes'

import { connect } from 'react-redux'

import { ThunkDispatch } from 'redux-thunk'
import { ActionsType, StateType } from '../../store'

import { fetchCountries, selectRegion } from './countriesActionCreators'


type CountriesPrototypeProps = {
  selection      : string;
  countries      : Countries;
  loading        : boolean;
  selectRegion   : (selection: React.ChangeEvent<HTMLSelectElement>) => void;
  fetchCountries : () => void;
}

class CountriesPrototype extends Component<CountriesPrototypeProps> {

  selectionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.selectRegion(event);
    this.props.fetchCountries();
  }

  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {

    let listOfCountries = null;

    if (this.props.countries) {
      listOfCountries = this.props.countries.map(country => (
        <p key={country.name.common}>{country.name.common}</p>
      ))
    }

    return (
      <>
        <button onClick={this.props.fetchCountries}>Make call</button>
        <p>Select region:</p>
        <select value={this.props.selection} onChange={this.selectionChangeHandler}>
          <option value="all">[All]</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        {this.props.loading? <p>Loading...</p>: ''}
        {this.props.countries?  <p>List of countries ({this.props.countries.length}):</p> : '' }
        {listOfCountries? listOfCountries : ''}
      </>
    )
  }
}

const mapStateToProps = (state:StateType) => ({
  selection : state.countries.selection,
  countries : state.countries.countries,
  loading   : state.countries.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateType, {}, ActionsType>
) => ({
  fetchCountries: () => dispatch(fetchCountries()),
  selectRegion: (selection:React.ChangeEvent<HTMLSelectElement>) => dispatch(selectRegion(selection)),
})

// const mapDispatchToProps = (dispatch:any) => ({dispatch})
// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     fetchCountries: () => dispatch(fetchCountries()),
//   }
// }

// export default connect(null, mapDispatchToProps)(CountriesPrototype);
// export default connect(mapStateToProps, mapDispatchToProps)(CountriesPrototype);
export default connect(mapStateToProps, mapDispatchToProps)(CountriesPrototype);