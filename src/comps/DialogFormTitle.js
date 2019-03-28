import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

function CloseButton({ onClose, className }) {
  return (
    //<Tooltip title="Закрыть" placement="left">
      <IconButton className={className} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    //</Tooltip>
    
  );
}
CloseButton = React.memo(CloseButton);

function DialogFormTitle({ onClose, children }) {
  const classes = useStyles();
  return (
    <DialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      <CloseButton onClose={onClose} className={classes.closeButton} />
    </DialogTitle>
  );
}

export default React.memo(DialogFormTitle);