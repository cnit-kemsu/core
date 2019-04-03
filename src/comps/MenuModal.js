import React from 'react';
import { useUpdater } from '../hooks/useUpdater';
import { useRenderer } from '../hooks/useRenderer';
import { useHandler } from '../hooks/useHandler';
import MuiMenu from '@material-ui/core/Menu';

const defaultMemoize = () => true;
function MenuModal({ mgr: menu, children, memoize = defaultMemoize, ...muiMenuProps }) {

  useUpdater(menu);
  const renderChildren = useRenderer(props => children(menu.close, props), children, memoize);
  const content = useHandler(() => renderChildren(menu.props), menu.state.target !== null);

  return (
    <MuiMenu open={Boolean(menu.state.target)} anchorEl={menu.state.target}
      onClose={menu.close} disableAutoFocusItem {...muiMenuProps}
    >
      {content}
    </MuiMenu>
  );
}

export default React.memo(MenuModal);