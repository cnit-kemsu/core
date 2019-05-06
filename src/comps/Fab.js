import React from 'react';
import MuiFab from '@material-ui/core/Fab';
import { Fab as useStyles } from './styles';

function Fab({ children, icon, ...props }) {

  const classes = useStyles();
  return <MuiFab className={classes.root} variant="extended" {...props}>
    {icon !== undefined && React.createElement(icon, { className: classes.icon })}
    {children}
  </MuiFab>;
}
export default React.memo(Fab);