import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import { useFormSubscriber } from '@kemsu/form';
import Fab from './Fab';

function SubmitFab({ comp, icon, children, disableIfNotDirty, disabled, ...props }) {
  const { dirty, touched, hasErrors, submit } = useFormSubscriber(comp);
  const _disabled = (touched && hasErrors)
    || (disableIfNotDirty && !dirty)
    || disabled;

  return <Fab data-control icon={icon} onClick={submit} 
    disabled={_disabled} {...props}
  >
    {children}
  </Fab>;
}

SubmitFab.defaultProps = {
  icon: SendIcon,
  children: 'Отправить',
  disableIfNotDirty: false
};

export default React.memo(SubmitFab);