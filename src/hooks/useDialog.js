import { useMemo } from 'react';
import { DialogStore } from '../classes/DialogStore';

export function useDialog() {

  const dialog = useMemo(() => new DialogStore(), []);
  return dialog;
}