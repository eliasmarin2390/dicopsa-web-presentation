export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

export function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
