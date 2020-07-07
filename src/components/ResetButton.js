import React from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { useFormSubscriber } from '@kemsu/form';

function ResetButton({ comp, children, disabled, ...props }) {
  const { dirty, reset } = useFormSubscriber(comp);
  const _disabled = !dirty || disabled;

  return <Button data-control size="small" color="secondary"
    disabled={_disabled} onClick={reset} {...props}
  >
    <ClearIcon />
    {children}
  </Button>;
}

ResetButton.defaultProps = {
  children: 'Сбросить'
};

export default React.memo(ResetButton);