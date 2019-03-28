import React, { useMemo, useCallback } from 'react';

export function useElementArray([renderItem, getKey], array, data) {

  const createItem = useCallback(
    item => React.createElement(() => renderItem(item, data), { key: getKey(item) }),
    []
  );

  const items = useMemo(
    () => array.map(createItem),
    [array]
  );

  return items;
}