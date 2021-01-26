// First we need to import axios.js
import _axios from 'axios'
// Next we make an 'instance' of it
export const  cancelToken = _axios.CancelToken;

export const axios = _axios.create({
  // .. where we make our configurations
  baseURL: process.env.BASEURL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const urls = {
  vehicles:'api/vehicles',
}
