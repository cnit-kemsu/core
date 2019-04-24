import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Loader as useStyles } from './styles';

function Loader({ loading, children }) {

  const classes = useStyles();
  return <div className={classes.root}>
    <div className={classes.justifier}>
      {loading && <CircularProgress className={classes.progressCircle} />}
      <div>
        {children}
      </div>
    </div>
    {loading && <div className={classes.uiBlocker} />}
  </div>;
}

export default React.memo(Loader);