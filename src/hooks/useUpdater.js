import { useMemo, useEffect } from 'react';
import { useForceUpdate } from '@implicit/force-update';
import { Updater } from '../classes/Updater';

export function useUpdater(observable) {

  const forceUpdate = useForceUpdate();
  const updater = useMemo(() => new Updater(forceUpdate, observable), []);

  useEffect(updater.handleSubscriptions, []);
}