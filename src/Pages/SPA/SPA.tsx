import React, { Component } from 'react'

import { Routes, Route } from 'react-router-dom'

import CountriesPanel from '../../Components/CountriesPanel/CountriesPanel'
import CountryDetails from '../../Components/CountryDetails/CountryDetails'

export default class SPA extends Component {
  render() {
    return (
      <>
      <div>SPA</div>
      <Routes>
        <Route path='/' element={<CountriesPanel/>} ></Route>
        <Route path='/details' element={<CountryDetails/>} ></Route>
      </Routes>
      </>
    )
  }
}
