import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function Dialog({ onClose, title, children, closeText }) {
  
  return <>
    <DialogTitle>{title}</DialogTitle>
    <MuiDialogContent>
      {children}
    </MuiDialogContent>
    <DialogActions>
      <Button color="primary" onClick={onClose}>
        {closeText}
      </Button>
    </DialogActions>
  </>;
}

Dialog.defaultProps = {
  closeText: 'Закрыть'
};

export default React.memo(Dialog);