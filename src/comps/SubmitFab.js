import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import { useFormStatus } from '@kemsu/form';
import Fab from './Fab';

function SubmitFab({ form, icon = SendIcon, children = 'Отправить', disableIfNotDirty = false, disabled, ...props }) {
  const { hasErrors, touched, dirty } = useFormStatus(form);

  return <Fab icon={icon} data-control disabled={(hasErrors && touched) || (disableIfNotDirty && !dirty) || disabled} onClick={form.submit} {...props}>
    {children}
  </Fab>;
}

export default React.memo(SubmitFab);