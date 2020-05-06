import api from '../index';

export const getOrganizationsRequest = ({ headers, ...params }) => {
  return api.get('/organizations', { params, headers });
};
