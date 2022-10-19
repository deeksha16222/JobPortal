import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `https://jobs-api.squareboat.info/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});