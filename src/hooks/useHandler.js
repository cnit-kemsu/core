import { useRef } from 'react';

export function useHandler(func, condition) {
  const value = useRef();
  if (condition || value.current === undefined) {
    value.current = func();
  }
  return value.current;
}