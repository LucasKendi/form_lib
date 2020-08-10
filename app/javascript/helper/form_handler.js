import { isValidCNPJ, isValidCPF} from 'helper/custom_validations'

export class FormHandler {
  static handle(el) {
    jQuery.validator.addMethod("validCPFCNPJ", function(value, element) {
      return this.optional(element) || (isValidCPF(value) || isValidCNPJ(value));
    }, "CPF/CNPJ inválido");

    const rulesObj = {
      "user[name]": {
        minlength: 4,
        required: true,
      },
      "user[cpf_cnpj]": {
        required: true,
        validCPFCNPJ: true
      },
      "user[email]": {
        required: true,
        email: true
      },
      "user[phone_prefix]": {
        required: true,
        minlength: 2,
      },
      "user[phone]": {
        required: true,
        minlength: 8
      },
      "user[balance]": {
        required: true,
      }
    }

    $(el).validate({rules: rulesObj});
  }
}