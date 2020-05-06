import development from './development';
import production from './production';
import testing from './testing';

const config = {
  development,
  testing,
  production,
};

export default config[process.env.REACT_APP_ENV || 'development'];
