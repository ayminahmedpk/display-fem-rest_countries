import React, { Component } from 'react'


type CountryCardProps = {
  flagURL    : string;
  name       : string;
  population : number;
  region     : string;
  capital    : string[];
}


export default class CountryCard extends Component<CountryCardProps> {

  render() {
    // console.log(this.props.capital)
    return (
      <>
      
        <img
          className = 'country-card__flag'
          src       = {this.props.flagURL}
          alt       = "Flag"
        />
        <div className="country-card__text">
        <p className = 'country-card__name'>{this.props.name}</p>
        <div className="country-card__fields">
          <div className = 'country-card__field'>
            <span className="country-card__field-name">Population: </span>
            <span className="country-card__field-value">{this.props.population.toLocaleString()}</span>
          </div>
          <div className = 'country-card__field'>
            <span className="country-card__field-name">Region: </span>
            <span className="country-card__field-value">{this.props.region}</span>
          </div>
          <div className = 'country-card__field'>
            <span className="country-card__field-name">Capital: </span>
            <span className="country-card__field-value">{this.props.capital}</span>
          </div>
        </div>
        </div>
      
      </>
    )
  }
}
