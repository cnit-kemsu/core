import { useMemo } from 'react';
import { Dialog } from '../classes/Dialog';

export function useDialog() {

  return (() => new Dialog())
  |> useMemo(#, []);
}