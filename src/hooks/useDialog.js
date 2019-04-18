import { useMemo } from 'react';
import { Dialog } from '../classes/Dialog';

export function useDialog(props) {

  return (() => new Dialog(props))
  |> useMemo(#, []);
}