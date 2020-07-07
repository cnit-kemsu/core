import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useFormSubscriber } from '@kemsu/form';
import { FormActions as useStyles } from './styles';

function FromActions({ comp, submitText, submitIcon, resetText, disableSubmitIfNotDirty }) {
  const { dirty, touched, hasErrors, submit, reset } = useFormSubscriber(comp);
  const disableSubmitButton = (touched && hasErrors)
  || (disableSubmitIfNotDirty && !dirty);

  const classes = useStyles({ resetText });
  return <div className={classes.root}>

    {resetText && 
      <Button className={classes.resetButton} color="primary" variant="outlined"
        data-control disabled={!dirty} onClick={reset}
      >
        {resetText}
      </Button>
    }

    <Button className={classes.submitButton} color="primary" variant="contained"
      data-control disabled={disableSubmitButton} onClick={submit}
    >
      {submitIcon && React.createElement(submitIcon, { className: classes.submitIcon })}
      {submitText}
    </Button>

  </div>;
}

FromActions.defaultProps = {
  submitIcon: SendIcon,
  submitText: 'Отправить',
  resetText: 'Очистить',
  disableSubmitIfNotDirty: false
};

export default React.memo(FromActions);