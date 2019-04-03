import { useMemo } from 'react';
import { Menu } from '../classes/Menu';

export function useMenu(props) {

  return (() => new Menu(props))
  |> useMemo(#, []);
}