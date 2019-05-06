import React from 'react';
import { useFormStatus } from '@kemsu/form';
import Button from '@material-ui/core/Button';

function ResetButton({ form, children = 'Сбросить', ...props }) {
  const { dirty } = useFormStatus(form);

  return <Button color="primary" variant="outlined"
    data-control disabled={!dirty} onClick={form.reset} {...props}
  >
    {children}
  </Button>;
}

export default React.memo(ResetButton);