import React, { useCallback } from 'react';
import MuiLink from '@material-ui/core/Link';
import { History } from '@kemsu/router';
import { Link as useStyles } from './styles';

function Link({ path, search, styled = false, ...props }) {
  const classes = useStyles();
  const route = (() => History.push(path, search)) |> useCallback(#, [path, search]);
  if (styled) return <MuiLink className={classes.styledLink} {...props} onClick={route} />;
  return <span {...props} onClick={route} />;
}

export default React.memo(Link);