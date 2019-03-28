import React, { useRef } from 'react';
import { useUpdater } from '../hooks/useUpdater';
import MuiDialog from '@material-ui/core/Dialog';
import { displayChildren } from './_shared';

function Dialog({ store: dialog, children, ...props }) {

  useUpdater(dialog);
  
  const _children = useRef();
  if (dialog.state.open || _children.current === undefined) {
    _children.current = displayChildren(children, { ...dialog });
  }

  return (
    <MuiDialog open={dialog.state.open} onClose={dialog.close} {...props}>
      {_children.current}
    </MuiDialog>
  );
}

export default React.memo(Dialog);