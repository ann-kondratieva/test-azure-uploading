import axios from 'axios';

let domain = '';
const API_PREFIX = process.env.API_PREFIX || 'api';
const API_VERSION = process.env.API_VERSION || 'v1';

if (process.env.NODE_ENV === 'production') {
  domain = `/${API_PREFIX}/${API_VERSION}/`;
} else {
  domain = `http://localhost:3001/${API_PREFIX}/${API_VERSION}/`;
}

let config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Pragma: 'no-cache',
  },
  params: {},
};

const apiService = axios.create(config);

export default apiService;
