import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `https://jobs-api.squareboat.info/api/v1/auth/login`,
  headers: {
    'Content-Type': 'application/json',
  },
});