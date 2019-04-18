import React from 'react';
import { useFormStatus } from '@kemsu/form';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

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
  actionsContent: {
    display: 'block',
    width: '100%',
  },
  // errorContent: {
  //   minHeight: '24px'
  // },
  buttonsContainer: {
    paddingTop: theme.spacing(1)
  }
}));

function filterClientInfo({ clientInfo }) {
  return clientInfo === 'UNMET_CONSTRAINT';
}
function mapToMessage({ message }, index) {
  return <Typography key={index} color="error">{message}</Typography>;
}
function displayErrors(graphqlError) {
  if (graphqlError === undefined) return;
  if (graphqlError.errors !== undefined) {
    return graphqlError.errors.filter(filterClientInfo)
    .map(mapToMessage);
  }
}

function Actions({ form, submitText, submitIcon, actions }) {
  const classes = useStyles({ actions });
  const { dirty, touched, hasErrors, submitErrors } = useFormStatus(form);

  return (
    <div className={classes.actionsContent}>

      {/* <div className={classes.errorContent}> */}
        <>{displayErrors(submitErrors)}</>
      {/* </div> */}
      
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

Actions.defaultProps = {
  submitText: 'Отправить',
  submitIcon: SendIcon,
  actions: 'reset-submit'
};

export default React.memo(Actions);