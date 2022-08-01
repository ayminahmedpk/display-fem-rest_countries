import React, { Component } from 'react'

import { connect } from 'react-redux'

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

const mapDispatchToProps = (dispatch: any) => ({
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