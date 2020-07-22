export function SPMaskBehavior(val) {
  return val.replace(/\D/g, '').length === 9 ? '00000-0000' : '0000-00009';
}

export const spOptions = {
  onKeyPress: function(val, e, field, options) {
    field.mask(SPMaskBehavior.apply({}, arguments), options);
  }
};
