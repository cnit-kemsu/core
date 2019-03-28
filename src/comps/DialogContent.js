import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function DialogContent({ onClose, title, children, okText }) {
  
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <MuiDialogContent>
        {children}
      </MuiDialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          {okText}
        </Button>
      </DialogActions>
    </>
  );
}

DialogContent.defaultProps = {
  okText: 'Закрыть'
};

export default React.memo(DialogContent);