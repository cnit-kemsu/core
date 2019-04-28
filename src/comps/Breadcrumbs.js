import React, { useMemo } from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';

function setKeyOfChild(child, index) {
  return React.cloneElement(child, { key: index });
}

function cloneWithAddedKeyProp(path) {
  return React.Children.map(path, setKeyOfChild);
}

export function Breadcrumbs({ childArray, children, ...props }) {
 const _children = (() => cloneWithAddedKeyProp(childArray))
 |> useMemo(#, childArray);
  return <MuiBreadcrumbs {...props}>
    {children !== undefined ? children : _children}
  </MuiBreadcrumbs>;
}