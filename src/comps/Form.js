import React, { useCallback } from 'react';
import FormActions from './FormActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function Form({ form, title, children, submitText, submitIcon, actions }) {
  const submitOnEnter = useCallback(
    event => {
      if (event.key === 'Enter') form.submit();
    },
    []
  );
  
  return (
    <span onKeyPress={submitOnEnter}>
      {title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions>
        <FormActions {...{ form, submitText, submitIcon, actions }} />
      </DialogActions>
    </span>
  );
}

export default React.memo(Form);