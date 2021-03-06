import React, { useMemo, useCallback } from 'react';
import { memo } from './_shared';

function defaultKey({ id }) {
  return id;
}

// export function useElementArray(renderElement, array = [], { key = defaultKey, memoize = true, ...props }) {

//   const _props = React.useRef();
//   _props.current = props;
//   const getProps = React.useCallback(() => _props.current, [])

//   const component = (({ item }) => renderElement(item, getProps()))
//   |> (() => memo(#, memoize))
//   |> useMemo(#, []);

//   const createElement = (
//     (item, index) => React.createElement(component, {
//       key: key(item, index),
//       item: item.constructor === Object ? { index, ...item } : item
//     })
//   ) |> useCallback(#, []);

//   return (() => array && array.map(createElement))
//   |> useMemo(#, [array]);
// }

export function useElementArray(renderElement, array = [], { key = defaultKey, ...props }) {

  const _renderElement = useCallback(
    ({ item, _props }) => renderElement(item, _props),
    []
  );
  return array && array.map((item, index) => React.createElement(_renderElement, {
    key: key(item, index),
    item: item.constructor === Object ? { index, ...item } : item,
    _props: props
  }));
}