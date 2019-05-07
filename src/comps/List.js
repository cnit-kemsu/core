import React from 'react';
import MuiList from '@material-ui/core/List';

function List({ children, ...props }) {

  return children.length > 0 ? <MuiList {...props}>{children}</MuiList> : 'Пусто';
}

export default React.memo(List);