import React from 'react';

export function memo(Component, variant) {
  if (variant === true) return React.forwardRef((props, ref) => Component(props, ref))
    |> React.memo(#);
  if (typeof variant === 'function') return React.forwardRef((props, ref) => Component(props, ref))
    |> React.memo(#, variant);
  return React.forwardRef((props, ref) => Component(props, ref));
}