import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { NoteItem as useStyles } from './styles';

function RemoveButton({ onClick }) {
  return <IconButton color="inherit" onClick={onClick}>
    <CloseIcon />
  </IconButton>;
}
RemoveButton = React.memo(RemoveButton);

const icon = {
  'success': CheckCircleIcon,
  'info': InfoIcon,
  'warning': WarningIcon,
  'error': ErrorIcon
};

function NoteItem({ notification }) {
  
  const { message, variant, remove } = notification;

  const classes = useStyles();
  return <SnackbarContent
    classes={{ root: classes.root, message: classes.message }}
    message={<>
      {variant !== 'default' && React.createElement(icon[variant], { className: classes.icon })}
      {message}
    </>}
    action={variant !== 'error' && <RemoveButton onClick={remove} />}
  />;
}

export default React.memo(NoteItem);