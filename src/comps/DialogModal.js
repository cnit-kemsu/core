import React, { useRef } from 'react';
import { isElements } from './_shared';
import { useUpdater } from '../hooks/useUpdater';
import MuiDialog from '@material-ui/core/Dialog';

function DialogModal({ mgr: dialog, children, ...props }) {

  useUpdater(dialog);
  
  const childElements = useRef();
  if (dialog.state.open || childElements.current === undefined) {
    childElements.current = isElements(children) ? children
    : React.createElement(children, { dialog });
  }

  return (
    <MuiDialog open={dialog.state.open} onClose={dialog.close} {...props}>
      {childElements.current}
    </MuiDialog>
  );
}

export default React.memo(DialogModal);