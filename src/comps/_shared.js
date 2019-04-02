const reactElementType = Symbol.for('react.element');
export function isElements(children) {
  return Array.isArray(children)
    || children?.$$typeof === reactElementType;
}
