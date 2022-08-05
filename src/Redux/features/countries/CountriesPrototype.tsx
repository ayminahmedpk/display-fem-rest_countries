import React, { Component } from 'react'

import { connect } from 'react-redux'

import { ThunkDispatch } from 'redux-thunk'
import { ActionsType, StateType } from '../../store'

import { fetchCountries } from './countriesActionCreators'

class CountriesPrototype extends Component<any> {

  // Need constructor for state, not props

  render() {
    return (
      <button onClick={this.props.fetchCountries}>Make call</button>
    )
  }
}

// const mapStateToProps = (state:any) => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateType, {}, ActionsType>
) => ({
  fetchCountries: () => dispatch(fetchCountries()),
})

// const mapDispatchToProps = (dispatch:any) => ({dispatch})
// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     fetchCountries: () => dispatch(fetchCountries()),
//   }
// }

// export default connect(null, mapDispatchToProps)(CountriesPrototype);
// export default connect(mapStateToProps, mapDispatchToProps)(CountriesPrototype);
export default connect(null, mapDispatchToProps)(CountriesPrototype);