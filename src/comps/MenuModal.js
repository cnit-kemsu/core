import React, { useRef } from 'react';
import { isElements } from './_shared';
import { useUpdater } from '../hooks/useUpdater';
import MuiMenu from '@material-ui/core/Menu';

function MenuModal({ mgr: menu, children, ...props }) {

  useUpdater(menu);
  
  const childElements = useRef();
  if (menu.state.target !== null || childElements.current === undefined) {
    childElements.current = isElements(children) ? children
    : React.createElement(children, { menu });
  }

  return (
    <MuiMenu open={Boolean(menu.state.target)} anchorEl={menu.state.target}
    onClose={menu.close} disableAutoFocusItem {...props}>
      {childElements.current}
    </MuiMenu>
  );
}

export default React.memo(MenuModal);