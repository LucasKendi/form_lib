export function CpfCnpjMaskBehavior(val) {
  return val.replace(/\D/g, '').length > 11 ? '00.000.000/0000-00' : '000.000.000-009999' ;
}

export const CpfCnpjOptions = {
  onKeyPress: function(val, e, field, options) {
    field.mask(CpfCnpjMaskBehavior.apply({}, arguments), options);
  }
};
