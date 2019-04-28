import React, { useMemo } from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';

function setKeyOfChild(child, index) {
  return React.cloneElement(child, { key: index });
}

function cloneWithAddedKeyProp(path) {
  return React.Children.map(path, setKeyOfChild);
}

export function Breadcrumbs({ path, children, ...props }) {
 const _children = (() => cloneWithAddedKeyProp(path))
 |> useMemo(#, path);
  return <MuiBreadcrumbs {...props}>
    {children !== undefined ? children : _children}
  </MuiBreadcrumbs>;
}