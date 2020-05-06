import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import styles from './styles';
import cat from 'static/cat.gif';

const SecondaryButton = ({ classes, className, type, onClick, label, size }) => {
  return (
    <Button
      size={size}
      disableRipple
      onClick={onClick}
      color="primary"
      type={type}
      className={classNames(classes.button, className)}>
      {label}
    </Button>
  );
};

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(SecondaryButton);
