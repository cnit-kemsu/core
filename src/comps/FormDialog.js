import React from 'react';
import FormActions from './FormActions';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  // dialogTitle: {
  //   margin: 0,
  //   padding: theme.spacing(2)
  // },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

function FormDialog({ onClose, form, title, children, submitText, submitIcon, actions }) {

  const classes = useStyles({ actions });
  
  return (
    <>
      <DialogTitle disableTypography //className={classes.dialogTitle}
      >
        <Typography variant="h6">{title}</Typography>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions>
        <FormActions {...{ form, submitText, submitIcon, actions }} />
      </DialogActions>
    </>
  );
}

export default React.memo(FormDialog);