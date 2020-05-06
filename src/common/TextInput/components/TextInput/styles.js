import { ERROR_MESSAGE_HEIGHT } from '../../constants';

const styles = (theme) => ({
  wrapper: {
    width: '100%',
    paddingBottom: ERROR_MESSAGE_HEIGHT,
  },
  label: {
    color: theme.palette.secondary.main,
    fontSize: '15px',
    lineHeight: '15px',
    '&$labelFocused:not($labelError)': {
      color: theme.palette.primary.main,
    },
  },
  labelFocused: {},
  labelError: {},
  textFieldContainer: {
    flex: 1,
    width: '100%',
  },
  textField: {
    '&$textFieldFocused:not($textFieldError) $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
    '&$textFieldFocused:not($textFieldError) $iconButton': {
      color: theme.palette.primary.main,
    },
    '&$textFieldError $notchedOutline': {
      borderColor: `${theme.palette.error.main} !important`,
    },
    height: 50,
    color: '#36425A',
    lineHeight: '20px',
    fontSize: '16px',
  },
  notchedOutline: {
    borderWidth: '1px !important',
    borderColor: `${theme.palette.secondary.main} !important`,
  },
  textFieldFocused: {},
  textFieldDisabled: {},
  textFieldError: {},
  input: {
    '&::placeholder': {
      color: '#CCD2DE',
      opacity: 1,
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  privateInput: {
    letterSpacing: 8,
    '&::placeholder': {
      letterSpacing: 'normal',
    },
  },
  iconButton: {
    fontSize: 22,
    width: 36,
    height: 36,
    padding: 7,
    color: theme.palette.secondary.main,
  },
  error: {
    position: 'absolute',
    color: theme.palette.error.main,
    fontSize: 11,
    bottom: 3,
    left: 0,
    maxHeight: ERROR_MESSAGE_HEIGHT,
    display: 'flex',
    alignItems: 'center',
  },
  errorIcon: {
    fontSize: 12,
  },
  tip: {
    ...theme.tip,
    //bottom: 0,
  },
  optionalText: {
    //color: '#CCD2DE',
  },
  tooltip: {
    border: '1px solid #EFF2F7',
    borderRadius: '4px 0 4px 4px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 10px 0 rgba(73,93,124,0.13)',
    padding: '6px 11px',
    opacity: 1,
  },
  tooltipPopper: {
    left: '-105px !important',
    [theme.breakpoints.down(480)]: {
      left: '-20px !important',
    },
  },
  tooltipText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#36425A',
    fontSize: '12px',
    fontWeight: 300,
    letterSpacing: '0.05px',
    lineHeight: '20px',
  },
  tooltipIcon: {
    fontSize: '14px',
    marginRight: '4px',
    color: '#2727C5',
  },
  tooltipPlacementBottom: {
    margin: '-18px 0',
  },
  invisible: {
    display: 'none',
  },
});

export default styles;
