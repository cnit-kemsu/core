import { useMemo } from 'react';
import { Menu } from '../classes/Menu';

export function useMenu(props) {

  const menu = useMemo(() => new Menu(props), []);
  return menu;
}