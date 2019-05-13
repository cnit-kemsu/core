import React, { useMemo, useCallback } from 'react';
import { memo } from './_shared';

function defaultKey({ id }) {
  return id;
}

export function useElementArray(renderElement, array = [], { key = defaultKey, memoize = true, ...props }) {

  const component = (({ item }) => renderElement(item, props))
  |> (() => memo(#, memoize)) 
  |> useMemo(#, []);

  const createElement = (
    item => React.createElement(component, {
      key: key(item),
      item
    })
  ) |> useCallback(#, []);

  return (() => array && array.map(createElement))
  |> useMemo(#, [array]);
}