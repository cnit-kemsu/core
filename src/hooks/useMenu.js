import { useMemo } from 'react';
import { MenuStore } from '../classes/MenuStore';

export function useMenu(data) {

  const menu = useMemo(() => new MenuStore(data), []);
  return menu;
}