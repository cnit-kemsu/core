import React, { useMemo, useCallback } from 'react';

function defaultKey(item) {
  return item.id;
}

export function useElementArray(component, array, { key = defaultKey, data = 'data', ...props }) {

  const createElement = useCallback(
    item => React.createElement(component, {
      key: key(item),
      [data]: item,
      ...props
    }),
    []
  );

  return useMemo(
    () => array.map(createElement),
    [array]
  );
}