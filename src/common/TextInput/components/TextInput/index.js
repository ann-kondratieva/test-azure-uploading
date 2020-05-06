import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { ErrorOutline } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import styles from './styles';
import { FORM_STATUSES } from 'constants/index';

const TextInput = ({
  classes,
  field: { name, value, ...fieldProps },
  form: { errors, status },
  label,
  onChangePasswordVisibility,
  placeholder,
  isPasswordShown,
  isConfidential,
  tipText,
  className,
  isOptional,
  endAdornment,
  isCapsLockTooltipShown,
  checkCapsLock,
  ...others
}) => {
  const error = status === FORM_STATUSES.submitted && errors[name];
  const inputStyle = classNames(classes.input, {
    [classes.privateInput]: !isPasswordShown && isConfidential,
  });

  return (
    <Tooltip
      open={isCapsLockTooltipShown}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={
        <Typography className={classes.tooltipText}>
          <ErrorOutline className={classes.tooltipIcon} /> Caps Lock включен
        </Typography>
      }
      placement="bottom-start"
      classes={{
        tooltip: classes.tooltip,
        popper: classes.tooltipPopper,
        tooltipPlacementBottom: classes.tooltipPlacementBottom,
      }}>
      <FormControl className={classNames(classes.wrapper, className)}>
        <TextField
          name={name}
          value={value}
          {...fieldProps}
          error={!!error}
          label={
            <>
              {label}
              <span className={classes.optionalText}>{!isOptional && '*'}</span>
            </>
          }
          placeholder={placeholder}
          className={classes.textFieldContainer}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
            classes: {
              root: classes.label,
              focused: classes.labelFocused,
              error: classes.labelError,
            },
          }}
          InputProps={{
            classes: {
              root: classes.textField,
              focused: classes.textFieldFocused,
              notchedOutline: classes.notchedOutline,
              multiline: classes.multiline,
              error: classes.textFieldError,
              input: inputStyle,
            },
            endAdornment:
              endAdornment ||
              (isConfidential && (
                <InputAdornment position="end" className={!value ? classes.invisible : undefined}>
                  <IconButton
                    color="primary"
                    aria-label="Toggle password visibility"
                    onClick={onChangePasswordVisibility}
                    className={classes.iconButton}>
                    {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )),
          }}
          {...others}
          type={!isPasswordShown && isConfidential ? 'password' : 'text'}
          onKeyUp={checkCapsLock}
          onKeyDown={checkCapsLock}
          /* onChange={(event) => {
            input.onChange(event);
            setTimeout(() => checkCapsLock(event), 1);
          }} */
        />
        {error ? (
          <Typography className={classes.error}>
            <ErrorOutline className={classes.errorIcon} />
            &nbsp;
            {error}
          </Typography>
        ) : (
          tipText && <Typography className={classes.tip}>{tipText}</Typography>
        )}
      </FormControl>
    </Tooltip>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isConfidential: PropTypes.bool.isRequired,
  isPasswordShown: PropTypes.bool.isRequired,
  onChangeVisibility: PropTypes.func,
  placeholder: PropTypes.string,
  tipText: PropTypes.string,
  className: PropTypes.string,
  isOptional: PropTypes.bool,
  endAdornment: PropTypes.node,
  inputClassName: PropTypes.string,
  isCapsLockTooltipShown: PropTypes.bool.isRequired,
  checkCapsLock: PropTypes.func,
};

export default withStyles(styles)(TextInput);
