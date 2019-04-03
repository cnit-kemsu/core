import React, { useMemo } from 'react';
import { memo } from './_shared';

const reactElementType = Symbol.for('react.element');

export function useRenderer(renderFunc, content, memoize = true) {
  return (() => 
    Array.isArray(content) || content?.$$typeof === reactElementType
    ? () => content
    : memo(renderFunc, memoize)
    |> (props => React.createElement(#, props))
  ) |> useMemo(#, []);
}