import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useFormSubscriber } from '@kemsu/form';
import { FormErrors as useStyles } from './styles';

function onlyUnmetConstraints({ clientInfo }) {
  return clientInfo === 'UNMET_CONSTRAINT';
}
function mapToMessage({ message }, index) {
  return <Typography key={index} color="error">{message}</Typography>;
}
export function displayErrors(errors) {
  if (errors == null) return;
  return errors.filter(onlyUnmetConstraints)
  .map(mapToMessage);
}

function FormErrors({ comp }) {
  const { submitErrors } = useFormSubscriber(comp);

  const classes = useStyles();
  return <div className={classes.root}>
    {displayErrors(submitErrors)}
  </div>;
}

export default React.memo(FormErrors);