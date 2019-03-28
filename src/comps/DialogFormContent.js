import React from 'react';
import { useUIBlocker } from '@implicit/form';
import DialogFormTitle from './DialogFormTitle';
import DialogFormActions from './DialogFormActions';
import DialogContent from '@material-ui/core/DialogContent';

function DialogFormContent({ onClose, form, title, children, submitText, submitIcon }) {
  useUIBlocker(form);
  
  return (
    <>
      <DialogFormTitle onClose={onClose}>{title}</DialogFormTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogFormActions form={form} submitText={submitText} submitIcon={submitIcon} />
    </>
  );
}

export default React.memo(DialogFormContent);