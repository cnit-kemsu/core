import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Notification as useStyles } from './styles';

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

function Notification({ message, variant, remove }) {

  const classes = useStyles();
  return <SnackbarContent
    classes={{ root: classes.root + ' ' + classes[variant], message: classes.message }}
    message={<>
      {variant !== 'default' && React.createElement(icon[variant], { className: classes.icon })}
      {typeof message === 'function' ? message(remove) : message}
    </>}
    action={variant !== 'error' && <RemoveButton onClick={remove} />}
  />;
}

export default React.memo(Notification);