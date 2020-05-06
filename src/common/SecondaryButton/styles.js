export default (theme) => ({
  button: {
    padding: '10px 40px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    '&:focus': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
  },
});
