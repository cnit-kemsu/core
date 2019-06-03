import React, { useCallback, useContext } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { ComposerContext } from '@kemsu/form';
import FormActions from './FormActions';
import FormErrors from './FormErrors';
import { Form as useStyles } from './styles';

function Form({ comp, title, children, submitText, submitIcon, resetText, disableSubmitIfNotDirty }) {
  const _comp = comp || useContext(ComposerContext);
  const submitOnEnter = useCallback(
    event => {
      if (event.key === 'Enter') _comp.submit();
    },
    []
  );
  
  const classes = useStyles({ resetText });
  return <span onKeyPress={submitOnEnter}>
    {title && <DialogTitle>{title}</DialogTitle>}

    <DialogContent>
      {children}
    </DialogContent>

    <DialogActions className={classes.actions}>
      <FormErrors comp={_comp} />
      <FormActions {...{ comp: _comp, submitText, submitIcon, resetText, disableSubmitIfNotDirty }} />
    </DialogActions>
  </span>;
}

export default React.memo(Form);