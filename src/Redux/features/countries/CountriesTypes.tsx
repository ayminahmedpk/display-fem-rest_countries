// https://github.com/mledoze/countries/blob/master/index.d.ts


export interface OfficialAndCommon {
  common: string
  official: string
}

export interface CountryName extends OfficialAndCommon {
  // native: {
  nativeName: {
    [languageCode: string]: OfficialAndCommon
  }
}

// 

export interface Currency {
  name: string
  symbol: string
}

export interface IntlDirectDialingCode {
  root: string
  suffixes: string[]
}

export interface Demonyms {
  f: string
  m: string
}

export interface Country {
  name: CountryName
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  currencies: { [currencyCode: string]: Currency }
  idd: IntlDirectDialingCode
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: { [languageCode: string]: string }
  translations: { [languageCode: string]: OfficialAndCommon }
  latlng: [number, number]
  // demonyms: { [languageCode: string]?: Demonyms }
  demonyms: { [languageCode: string]: Demonyms }
  landlocked: boolean
  borders: string[]
  area: number
  flag: string
  flags: {svg: string} // added
  population: number // added
}

export type Countries = Country[]

declare const countries: Countries

export default countries