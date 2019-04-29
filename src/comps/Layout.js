import React, { useMemo } from 'react';

export function LayoutElement() {
  return null;
}

function handleChild(child) {
  if (child?.type?.name === 'LayoutElement') return child.props.children;
  if (child?.props?.children) return findLayoutElements(child.props.children);
  return null;
}

function findLayoutElements(children) {
  return React.Children.map(children, handleChild).filter(element => element !== null);
}

function Layout({ render, children }) {
  const elements = (() => findLayoutElements(children))
  |> useMemo(#, [children]);
  return render(elements);
}
export default React.memo(Layout);