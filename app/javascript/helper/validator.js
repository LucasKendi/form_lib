export function isMinLengthValid(el, value) {
  return  $(el).val().length >= value
}

export function isMinValueValid(el, value) {
  return  parseInt($(el).val()) >= value
}
