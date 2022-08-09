

import {rest} from 'msw';
import {setupServer} from 'msw/node';

import data from './data/apiReturn-custom.json';

const server = setupServer(
  rest.get('https://restcountries.com/v3.1/all', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data)
    )
  })
)


export {server, rest};