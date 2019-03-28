import React from 'react';

export function displayChildren(children, props) {
  return Array.isArray(children) || children?.$$typeof === Symbol.for('react.element') ?
  children : React.createElement(children, props);
}