import React from 'react';
import { useUIBlocker, useFormStatus } from '@kemsu/form';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({

  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },

  resetButton: {
    float: 'left'
  },
  submitButton: {
    float: 'right'
  },
  submitFab: {
    width: '100%'
  },
  submitIcon: {
    marginRight: theme.spacing(1)
  },
  actionsContent: {
    display: 'block',
    width: '100%'
  },
  buttonsContainer: {
    paddingTop: theme.spacing(1)
  }

}));

function FormActions({ classes, form, submitText, submitIcon, resettable }) {
  const { dirty, touched, hasErrors, submitErrors } = useFormStatus(form);
  // const submitButton = React.createElement(resettable ? Button : Fab, {
  //   className: resettable ? classes.submitButton : classes.submitFab,
  //   color: 'primary',
  //   variant: resettable ? 'contained' : 'extended',
  //   onClick: form.submit,
  //   disabled: hasErrors && touched,
  //   'data-control': true,
  //   children: {
      
  //   }
  // });
  const SubmitButton = resettable ? Button : Fab;

  return (
    <div className={classes.actionsContent}>

      {submitErrors && <Typography color="error">{submitErrors}</Typography>}

      <div className={classes.buttonsContainer}>

        {resettable && 
          <Button className={classes.resetButton} color="primary" variant="outlined"
            data-control disabled={!dirty} onClick={form.reset}
          >
            Сбросить
          </Button>
        }

        <SubmitButton  color="primary" data-control disabled={hasErrors && touched} onClick={form.submit}
          className={resettable ? classes.submitButton : classes.submitFab}
          variant={resettable ? 'contained' : 'extended'}>
          {submitIcon && React.createElement(submitIcon, { className: classes.submitIcon })}
          {submitText}
        </SubmitButton>

      </div>

    </div>
  );
}

function DialogForm({ onClose, form, title, children, submitText, submitIcon, resettable }) {

  const classes = useStyles();
  useUIBlocker(form);
  
  return (
    <>
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6">{title}</Typography>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions>
        <FormActions {...{ classes, form, submitText, submitIcon, resettable }} />
      </DialogActions>
    </>
  );
}

DialogForm.defaultProps = {
  submitText: 'Отправить',
  submitIcon: SendIcon,
  resettable: true
};

export default React.memo(DialogForm);