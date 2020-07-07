import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiPaper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}));

function Paper({ children, ...props }) {
  const classes = useStyles();

  return (
    <MuiPaper className={classes.root} elevation={1} {...props}>
      {children}
    </MuiPaper>
  );
}

export default React.memo(Paper);