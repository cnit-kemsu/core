import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useFormStatus } from '@kemsu/form';

function onlyUnmetConstaint({ clientInfo }) {
  return clientInfo === 'UNMET_CONSTRAINT';
}
function mapToMessage({ message }, index) {
  return <Typography key={index} color="error">{message}</Typography>;
}

function FormErrors({ form }) {
  const { submitErrors } = useFormStatus(form);

  if (submitErrors === undefined) return;
  if (submitErrors.errors !== undefined) {
    return submitErrors.errors
      .filter(onlyUnmetConstaint)
      .map(mapToMessage);
  }
}

export default React.memo(FormErrors);