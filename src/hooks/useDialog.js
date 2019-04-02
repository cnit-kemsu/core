import { useMemo } from 'react';
import { Dialog } from '../classes/Dialog';

export function useDialog() {

  const dialog = useMemo(() => new Dialog(), []);
  return dialog;
}