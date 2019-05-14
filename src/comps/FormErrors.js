import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useFormStatus } from '@kemsu/form';

function onlyUnmetConstaint({ clientInfo }) {
  return clientInfo === 'UNMET_CONSTRAINT';
}
function mapToMessage({ message }, index) {
  return <Typography key={index} color="error">{message}</Typography>;
}
export function displayErrors(errors) {
  if (errors === undefined) return;
  return errors.filter(onlyUnmetConstaint)
  .map(mapToMessage);
}

function FormErrors({ form }) {
  const { submitErrors } = useFormStatus(form);

  return displayErrors(submitErrors);
}

export default React.memo(FormErrors);