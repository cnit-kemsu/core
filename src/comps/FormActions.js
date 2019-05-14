import React from 'react';
import { useFormStatus } from '@kemsu/form';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { displayErrors } from './FormErrors';

const useStyles = makeStyles(theme => ({
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
  // errorContent: {
  //   minHeight: '24px'
  // },
  actionsContent: ({ actions }) => actions === 'submit' ? {
    paddingLeft: '16px',
    paddingRight: '16px',
    display: 'block',
    width: '100%'
  } : {
    display: 'block',
    width: '100%'
  },
  buttonsContainer: {
    paddingTop: theme.spacing(1)
  }
}));

function Actions({ form, submitText, submitIcon, actions }) {
  const classes = useStyles({ actions });
  const { dirty, touched, hasErrors, submitErrors } = useFormStatus(form);

  return (
    <div className={classes.actionsContent}>

      {/* <div className={classes.errorContent}> */}
        <>{displayErrors(submitErrors)}</>
      {/* </div> */}
      
      <div className={classes.buttonsContainer}>

        {actions.includes('reset') && 
          <Button className={classes.resetButton} color="primary" variant="outlined"
            data-control disabled={!dirty} onClick={form.reset}
          >
            Сбросить
          </Button>
        }

        {actions.includes('submit') && 
          <Button className={classes.submitButton} color="primary" variant="contained"
            data-control disabled={hasErrors && touched} onClick={form.submit}
          >
            {submitIcon && React.createElement(submitIcon, { className: classes.submitIcon })}
            {submitText}
          </Button>
        }

      </div>

    </div>
  );
}

Actions.defaultProps = {
  submitText: 'Отправить',
  submitIcon: SendIcon,
  actions: 'reset-submit'
};

export default React.memo(Actions);