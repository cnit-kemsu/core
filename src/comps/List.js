import React from 'react';
import MuiList from '@material-ui/core/List';

function List({ children, ...props }) {

  return <MuiList {...props}>{children}</MuiList>;
}

export default React.memo(List);