import React from 'react';

export function memo(Component, variant) {
  if (variant === true) return React.memo(Component);
  if (typeof variant === 'function') return React.memo(Component, variant);
  return Component;
}