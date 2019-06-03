import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { useEnterClickSubmit, Fields } from '@kemsu/form';
import FormActions from './FormActions';
import FormErrors from './FormErrors';
import { Form as useStyles } from './styles';

function Form({ comp, title, children, submitText, submitIcon, resetText, disableSubmitIfNotDirty }) {
  const handleEnterKeyPress = useEnterClickSubmit(comp);
  
  const classes = useStyles({ resetText });
  return <span onKeyPress={handleEnterKeyPress}>
    {title && <DialogTitle>{title}</DialogTitle>}

    <DialogContent>
      <Fields comp={comp}>
        {children}
      </Fields>
    </DialogContent>

    <DialogActions className={classes.actions}>
      <FormErrors comp={comp} />
      <FormActions {...{ comp, submitText, submitIcon, resetText, disableSubmitIfNotDirty }} />
    </DialogActions>
  </span>;
}

export default React.memo(Form);