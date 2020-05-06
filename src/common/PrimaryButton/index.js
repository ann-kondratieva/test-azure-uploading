import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import styles from './styles';
import cat from 'static/cat.gif';

const PrimaryButton = ({ classes, className, isPending, type, onClick, label }) => {
  return (
    <div className={classes.buttonContainer}>
      {isPending ? (
        <img src={cat} alt="loader" className={classes.loader} />
      ) : (
        <Button
          disableRipple
          variant="outlined"
          type={type}
          color="primary"
          onClick={onClick}
          className={classNames(classes.button, className)}>
          {label}
        </Button>
      )}
    </div>
  );
};

PrimaryButton.propTypes = {
  isPending: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(PrimaryButton);
