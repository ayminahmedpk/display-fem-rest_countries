import { Component } from 'react'

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Countries, Country } from '../../Redux/features/countries/CountriesTypes';



// Because URL object is buggy with hash router
import urlToEncodedParams from '../../helpers/urlToEncodedParams';
import decodeParams from '../../helpers/decodeParams';
import { StateType } from '../../Redux/store';

type CountryDetailsProps = {
  countries: Countries | null;
}


class CountryDetails extends Component<CountryDetailsProps> {

  
  render() {
    
    const params: any = decodeParams(urlToEncodedParams(window.location.href));
    const receivedName = params.country;

    
    let country: Country | undefined;
    if(this.props.countries) {
      country = this.props.countries.find((country) => (
        country.name.common === receivedName )
      );
    }
    

    // if(this.props.countries) {
    //   console.log(this.props.countries)
    // }

    // Helper
    const arrayToCommaString = (stringArray: string[]) => {
      if (stringArray.length === 0) { return '<none>'; }
      let commaString = stringArray[0];
      if (stringArray.length > 1) {
        stringArray.slice(1).forEach(item => commaString += `, ${item}`)
      }
      return commaString;
    }

    const currenciesArray: string[] = [];
    for (const key in country?.currencies) {
      currenciesArray.push(country?.currencies![key].name!);
    }
    const currencyText = arrayToCommaString(currenciesArray);
    
    let languagesArray: string[] = [];
    for (const key in country?.languages) {
      languagesArray.push(country?.languages![key]!)
    }
    const languagesText = arrayToCommaString(languagesArray);

    let borderCCA3Array = country?.borders;
    let borderCountries:string[] = [];
    if (borderCCA3Array) {
      borderCCA3Array.forEach(
        cca3 => {
          let country = this.props.countries?.find(country => country.cca3 === cca3)
          borderCountries.push(country!.name.common);
        }
      )
    }
    const borderTags = borderCountries.map(country => <button key={country}>{country}</button> )

    
    return (
      <>
      <Link to='/'><button>Back</button></Link>
      <div>CountryDetails</div>
      <p>Country: {params.country}</p>
      <br /><br /><br />
      <p>{country?.name.common}</p>
      <p>Native name: {country?.name.official}</p>
      <p>Population: {country?.population.toLocaleString()}</p>
      <p>Region: {country?.region}</p>
      <p>Sub region: {country?.subregion}</p>
      <p>Capital: {country?.capital}</p>
      <br /><br /><br />
      <p>Top Level Domain: {country?.tld}</p>
      <p>Currencies: {currencyText}</p>
      <p>Languages: {languagesText}</p>
      <p>Border countries: {borderTags}</p>
      </>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  countries: state.countries.countries,
})

export default connect(mapStateToProps)(CountryDetails);