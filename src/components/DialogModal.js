import React from 'react';
import { useUpdater } from '../hooks/useUpdater';
import { useRenderer } from '../hooks/useRenderer';
import { useHandler } from '../hooks/useHandler';
import MuiDialog from '@material-ui/core/Dialog';

function DialogModal({ mgr: dialog, children, memoize = true, ...muiDialogProps }) {

  useUpdater(dialog);
  const renderChildren = useRenderer(props => children(dialog.close, props), children, memoize);
  const content = useHandler(() => renderChildren(dialog.props), dialog.state.open);

  return (
    <MuiDialog open={dialog.state.open} onClose={dialog.close} {...muiDialogProps}>
      {content}
    </MuiDialog>
  );
}

export default React.memo(DialogModal);