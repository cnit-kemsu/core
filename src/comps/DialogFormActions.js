import React from 'react';
import { useFormStatus } from '@implicit/form';
import { makeStyles } from '@material-ui/styles';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  resetButton: {
    float: 'left'
  },
  submitButton: {
    float: 'right'
  },
  actionsContent: {
    display: 'block',
    width: '100%'
  },
  buttonsContainer: {
    paddingTop: theme.spacing(1)
  }
}));

function DialogFormActions({ form, submitText, submitIcon }) {
  const classes = useStyles();
  const { dirty, touched, hasErrors, submitErrors } = useFormStatus(form);

  return (
    <DialogActions>
      <div className={classes.actionsContent}>

        {submitErrors && <Typography color="error">{submitErrors}</Typography>}

        <div className={classes.buttonsContainer}>

          <Button className={classes.resetButton} color="primary" variant="outlined"
            data-control disabled={!dirty} onClick={form.reset}
          >
            Сбросить
          </Button>

          <Button className={classes.submitButton} color="primary" variant="contained"
            data-control disabled={hasErrors && touched} onClick={form.submit}
          >
            {submitIcon}
            {submitText}
          </Button>

        </div>

      </div>
    </DialogActions>
  );
}

DialogFormActions.defaultProps = {
  submitText: 'Отправить',
  submitIcon: undefined
};

export default React.memo(DialogFormActions);