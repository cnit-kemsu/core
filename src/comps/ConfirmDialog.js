import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2)
  },
  confirmIcon: {
    marginRight: theme.spacing(1)
  }
}));

function ConfirmDialog({ onConfirm, onClose, title, children, confirmText, confirmIcon }) {

  const classes = useStyles();
  
  return (
    <>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions>

        <Button onClick={onClose} color="primary" variant="outlined">
          Отменить
        </Button>

        <Button color="primary" variant="contained" onClick={onConfirm}>
          {confirmIcon && React.createElement(confirmIcon, { className: classes.confirmIcon })}
          {confirmText}
        </Button>

      </DialogActions>
    </>
  );
}

ConfirmDialog.defaultProps = {
  confirmText: 'Подтвердить',
  confirmIcon: SendIcon
};

export default React.memo(ConfirmDialog);