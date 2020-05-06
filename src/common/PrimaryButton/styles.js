export default (theme) => ({
  buttonContainer: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: '10px 40px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    borderRadius: '50px',
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
  },
  loader: {
    width: 60,
    height: 60,
  },
});
