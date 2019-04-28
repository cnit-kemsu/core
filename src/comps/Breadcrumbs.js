import React, { useMemo } from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';

function setKeyOfChild(child, index) {
  return React.cloneElement(child, { key: index });
}

function cloneWithAddedKeyProp(path) {
  return React.Children.map(path, setKeyOfChild);
}

function renderBreadcrubms(path) {
  return <MuiBreadcrumbs>
    {cloneWithAddedKeyProp(path)}
  </MuiBreadcrumbs>;
}

export function Breadcrumbs({ path, children }) {
  if (children !== undefined) return children;
 return (
    () => renderBreadcrubms(path)
  ) |> useMemo(#, path);
}