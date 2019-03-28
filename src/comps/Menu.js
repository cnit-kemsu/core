import React, { useRef } from 'react';
import { useUpdater } from '../hooks/useUpdater';
import MuiMenu from '@material-ui/core/Menu';
import { displayChildren } from './_shared';

function Menu({ store: menu, children, ...props }) {

  useUpdater(menu);
  
  const _children = useRef();
  if (menu.state.target !== null || _children.current === undefined) {
    _children.current = displayChildren(children, { ...menu });
  }

  return (
    <MuiMenu disableAutoFocusItem
    anchorEl={menu.state.target}
    open={Boolean(menu.state.target)}
    onClose={menu.close} {...props}>
      {_children.current}
    </MuiMenu>
  );
}

export default React.memo(Menu);