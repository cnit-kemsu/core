import React, { useEffect } from 'react';
import { useForceUpdate } from '@kemsu/force-update';
import { notifications, updateEvent } from '../classes/Notifications';
import Notification from './Notification';
import { Notifier as useStyles } from './styles';

function Notifier({ marginLeft }) {
  const forceUpdate = useForceUpdate();
  useEffect(
    () => {
      const updateSub = updateEvent.subscribe(() => forceUpdate());
      return () => updateSub.unsubscribe();
    },
    []
  );

  const classes = useStyles();
  return <div style={{ marginLeft }} className={classes.root}>
    {notifications.map(note => 
      <Notification {...note} />
    )}
  </div>;
}

export default React.memo(Notifier);