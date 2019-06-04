import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Fields } from '@kemsu/form';
import FormActions from './FormActions';
import FormErrors from './FormErrors';
import { FormDialog as useStyles } from './styles';

function FormDialog({ onClose, comp, title, children, submitText, submitIcon, resetText, disableSubmitIfNotDirty }) {

  const classes = useStyles({ resetText });
  return <>
    <DialogTitle disableTypography>
      <Typography className={classes.title} variant="h6">{title}</Typography>
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    <DialogContent>
      <Fields comp={comp}>
        {children}
      </Fields>
    </DialogContent>

    <DialogActions className={classes.actions}>
      <FormErrors comp={comp} />
      <FormActions {...{ comp, submitText, submitIcon, resetText, disableSubmitIfNotDirty }} />
    </DialogActions>
  </>;
}

export default React.memo(FormDialog);