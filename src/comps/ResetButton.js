import React from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { useFormStatus } from '@kemsu/form';

function ResetButton({ form, children = 'Сбросить', disabled, ...props }) {
  const { dirty } = useFormStatus(form);

  return <Button size="small" color="secondary"
    data-control disabled={!dirty || disabled} onClick={form.reset} {...props}
  >
    <ClearIcon />
    {children}
  </Button>;
}

export default React.memo(ResetButton);