import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import styles from './styles';

const CustomModal = ({ classes, isOpen, onClose, children, className }) => {
  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <div className={classNames(classes.paper, className)}>
        <IconButton
          disableRipple
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
        {children}
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomModal);
