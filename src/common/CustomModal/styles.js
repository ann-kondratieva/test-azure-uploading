export default (theme) => ({
  modal: {},
  paper: {
    position: 'absolute',
    width: '300px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 6px 2px rgba(0,0,0,0.04)',
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) !important',
    borderRadius: '8px',
    paddingRight: '17px',
    paddingLeft: '21px',
    '@media (min-width:768px)': {
      paddingRight: '35px',
      paddingLeft: '35px',
      width: '529px',
    },
    paddingTop: '50px',
    paddingBottom: '35px',
    maxHeight: '95%',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey.light,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});
