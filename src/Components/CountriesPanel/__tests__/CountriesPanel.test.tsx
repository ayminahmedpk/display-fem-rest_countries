

import React from "react";

import { render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

import {server, rest} from '../../../msw-server/msw-server'

// Rendering from 'App' component to have redux functionality
import App from '../../../App/App';
import userEvent from "@testing-library/user-event";

// console.log(data);

// Africa  : Angola
// America : Bolivia
// Asia    : Kuwait
// Europe  : Moldova
// Oceania : Palau


beforeAll(() => server.listen());
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


const countries = ['Angola', 'Bolivia', 'Kuwait', 'Moldova', 'Palau'];


describe('Testing the selection functionality', () => {

  test('All countries present by default', async () => {
    const {findByText, queryByText} = render(<App/>);
    const Angola  = await findByText('Angola' );
    await waitFor(() => expect(Angola).toBeInTheDocument());
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).toBeInTheDocument();
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).toBeInTheDocument();
  })

  test('Africa includes only Angola', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.selectOptions(getByTestId('select-bar'), 'Africa');
    const Angola  = await findByText('Angola' );
    await waitFor(() => expect(Angola).toBeInTheDocument());
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).not.toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })
  
  test('America includes only Bolivia', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.selectOptions(getByTestId('select-bar'), 'America');
    const Bolivia = await findByText('Bolivia');
    await waitFor(() => expect(Bolivia).toBeInTheDocument());
    const Angola  = queryByText('Angola' ); expect(Angola ).not.toBeInTheDocument();
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })
  
  test('Asia includes only Kuwait', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.selectOptions(getByTestId('select-bar'), 'Asia');
    const Kuwait  = await findByText('Kuwait' );
    await waitFor(() => expect(Kuwait).toBeInTheDocument());
    const Angola  = queryByText('Angola' ); expect(Angola ).not.toBeInTheDocument();
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).not.toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })
  
  test('Europe includes only Moldova', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.selectOptions(getByTestId('select-bar'), 'Europe');
    const Moldova  = await findByText('Moldova' );
    await waitFor(() => expect(Moldova).toBeInTheDocument());
    const Angola  = queryByText('Angola' ); expect(Angola ).not.toBeInTheDocument();
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).not.toBeInTheDocument();
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })
  
  
  test('Oceania includes only Palau', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.selectOptions(getByTestId('select-bar'), 'Oceania');
    const Palau  = await findByText('Palau' );
    await waitFor(() => expect(Palau).toBeInTheDocument());
    const Angola  = queryByText('Angola' ); expect(Angola ).not.toBeInTheDocument();
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).not.toBeInTheDocument();
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Moldova = queryByText('Angola' ); expect(Moldova).not.toBeInTheDocument();
  })
  
})


describe('Testing the search functionality', () => {
  
  test('Empty query should show all countries', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    // const searchBar = getByTestId('search-bar')
    const Angola  = await findByText('Angola' );
    await waitFor(() => expect(Angola).toBeInTheDocument());
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).toBeInTheDocument();
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).toBeInTheDocument();
  })

  test('Country name should show only that country', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.type(getByTestId('search-bar'), 'Angola');
    const Angola  = await findByText('Angola' );
    await waitFor(() => expect(Angola).toBeInTheDocument());
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).not.toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })

  test('Search is case insensitive', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.type(getByTestId('search-bar'), 'angola');
    const Angola  = await findByText('Angola' );
    await waitFor(() => expect(Angola).toBeInTheDocument());
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).not.toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })

  test('Search works for partial matches, too', async () => {
    const {findByText, queryByText, getByTestId} = render(<App/>)
    userEvent.type(getByTestId('search-bar'), 'ol');
    const Angola  = await findByText('Angola' );
    await waitFor(() => expect(Angola).toBeInTheDocument());
    const Bolivia = queryByText('Bolivia'); expect(Bolivia).toBeInTheDocument();
    const Moldova = queryByText('Moldova'); expect(Moldova).toBeInTheDocument();
    const Kuwait  = queryByText('Kuwait' ); expect(Kuwait ).not.toBeInTheDocument();
    const Palau   = queryByText('Palau'  ); expect(Palau  ).not.toBeInTheDocument();
  })

})