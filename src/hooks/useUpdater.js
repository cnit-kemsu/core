import { useMemo, useEffect } from 'react';
import { useForceUpdate } from '@kemsu/force-update';
import { Updater } from '../classes/Updater';

export function useUpdater(store) {

  const forceUpdate = useForceUpdate();
  const updater = (() => new Updater(forceUpdate, store)) |> useMemo(#, []);
  
  useEffect(updater.handleUpdate, []);
}