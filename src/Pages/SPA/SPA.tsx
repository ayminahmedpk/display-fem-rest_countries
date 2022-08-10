import React, { Component } from 'react'

import { connect } from 'react-redux';

import { Routes, Route } from 'react-router-dom'

import { ThunkDispatch } from 'redux-thunk'
import { ActionsType, StateType } from '../../Redux/store'
import { fetchCountries } from '../../Redux/features/countries/countriesActionCreators'

import Header from '../../Components/Header/Header';
import CountriesPanel from '../../Components/CountriesPanel/CountriesPanel'
import CountryDetails from '../../Components/CountryDetails/CountryDetails'

type SPAProps = {
  fetchCountries: () => void
}

class SPA extends Component<SPAProps> {

  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    return (
      <>
      <Header/>
      <Routes>
        <Route path='/' element={<CountriesPanel/>} ></Route>
        <Route path='/details' element={<CountryDetails/>} ></Route>
      </Routes>
      </>
    )
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateType, {}, ActionsType>
) => ({
  fetchCountries: () => dispatch(fetchCountries()),
})

export default connect(null, mapDispatchToProps)(SPA);