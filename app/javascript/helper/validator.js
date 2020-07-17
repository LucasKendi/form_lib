export function isMinLengthValid(value, minLength) {
  return  value.length >= minLength;
}

export function isMinValueValid(value, minValue) {
  return  parseInt(value) >= minValue;
}
