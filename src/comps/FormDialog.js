import React from 'react';
import { useFormStatus } from '@kemsu/form';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
    float: 'left',
    marginRight: '8px'
  },
  submitButton: ({ actions }) => actions === 'submit' ? {
    width: '100%'
  } : {
    float: 'right'
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

function Actions({ classes, form, submitText, submitIcon, actions }) {
  const { dirty, touched, hasErrors, submitErrors } = useFormStatus(form);

  return (
    <div className={classes.actionsContent}>

      {submitErrors && <Typography color="error">{submitErrors}</Typography>}

      <div className={classes.buttonsContainer}>

        {actions === 'reset-submit' && 
          <Button className={classes.resetButton} color="primary" variant="outlined"
            data-control disabled={!dirty} onClick={form.reset}
          >
            Сбросить
          </Button>
        }

        <Button className={classes.submitButton} color="primary" variant="contained"
          data-control disabled={hasErrors && touched} onClick={form.submit}
        >
          {submitIcon && React.createElement(submitIcon, { className: classes.submitIcon })}
          {submitText}
        </Button>

      </div>

    </div>
  );
}

function FormDialog({ onClose, form, title, children, submitText, submitIcon, actions }) {

  const classes = useStyles({ actions });
  
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
        <Actions {...{ classes, form, submitText, submitIcon, actions }} />
      </DialogActions>
    </>
  );
}

FormDialog.defaultProps = {
  submitText: 'Отправить',
  submitIcon: SendIcon,
  actions: 'reset-submit'
};

export default React.memo(FormDialog);