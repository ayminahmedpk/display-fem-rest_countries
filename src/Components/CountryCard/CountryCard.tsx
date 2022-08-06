import React, { Component } from 'react'


type CountryCardProps = {
  flagURL    : string;
  name       : string;
  population : number;
  region     : string;
  capital    : string[];
}

// const sampleProps = () => {
//   const flagURL    = 'https://flagcdn.com/pk.svg';
//   const name       = 'Pakistan';
//   const population = 220892331;
//   const region     = 'Asia'
//   const capital    = 'Islamabad';
// }


export default class CountryCard extends Component<CountryCardProps> {

  render() {
    // console.log(this.props.capital)
    return (
      <>
      <div>
        <img src={this.props.flagURL} alt="Flag" />
        <h2>{this.props.name}</h2>
        <p>Population: {this.props.population.toLocaleString()}</p>
        <p>Region: {this.props.region}</p>
        <p>Capital: {this.props.capital}</p>
      </div>
      </>
    )
  }
}
