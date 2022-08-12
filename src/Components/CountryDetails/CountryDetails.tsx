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
    const borderTags = (
      <span className='country-details__border-tags'>
        {
        borderCountries.map(country => (
          <span className='country-details__border-tag' key={country}>
            {country}
          </span>
        ))}
      </span>
    )
    

    
    return (
      <div className="country-details">
        
        <Link to='/'>
          <button className='country-details__back'>
            Back
          </button>
        </Link>

        <img
          className = 'country-details__flag'
          src       = {country?.flags.svg}
          alt       = "Flag"
        />
        
        <div className="country-details__text">

          <p className='country-details__name'>{country?.name.common}</p>
        
          <div className="country-details__section">
            <div className="country-details__field">
              <span className='country-details__field-name'>Native name: </span>
              <span className='country-details__field-value'>{country?.name.official}</span>
            </div>
            <div className="country-details__field">
              <span className='country-details__field-name'>Population: </span>
              <span className='country-details__field-value'>{country?.population.toLocaleString()}</span>
            </div>
            <div className="country-details__field">
              <span className='country-details__field-name'>Region: </span>
              <span className='country-details__field-value'>{country?.region}</span>
            </div>
            <div className="country-details__field">
              <span className='country-details__field-name'>Sub region: </span>
              <span className='country-details__field-value'>{country?.subregion}</span>
            </div>
            <div className="country-details__field">
              <span className='country-details__field-name'>Capital: </span>
              <span className='country-details__field-value'>{country?.capital}</span>
            </div>
          </div>

          <div className="country-details__section">
          <div className="country-details__field">
            <span className='country-details__field-name'>Top Level Domain: </span>
            <span className='country-details__field-value'>{country?.tld}</span>
          </div>
          <div className="country-details__field">
            <span className='country-details__field-name'>Currencies: </span>
            <span className='country-details__field-value'>{currencyText}</span>
          </div>
          <div className="country-details__field">
            <span className='country-details__field-name'>Languages: </span>
            <span className='country-details__field-value'>{languagesText}</span>
          </div>
          </div>

          <div className="country-details__section">
            <div className="country-details__field">
              <span className='country-details__field-name'>Border countries </span>
              <span className='country-details__field-value'>{borderTags}</span>
            </div>
          </div>
        </div>

        
      </div>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  countries: state.countries.countries,
})

export default connect(mapStateToProps)(CountryDetails);