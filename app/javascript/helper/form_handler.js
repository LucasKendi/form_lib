import { isValidCNPJ, isValidCPF} from 'helper/custom_validations'

export class FormHandler {
  static handle(el) {
    jQuery.validator.addMethod("validCPF", function(value, element) {
      return this.optional(element) || isValidCPF(value);
    }, "CPF inválido");

    jQuery.validator.addMethod("validCNPJ", function(value, element) {
      return this.optional(element) || isValidCNPJ(value);
    }, "CNPJ inválido");

    const rulesObj = {
      "user[name]": {
        minlength: 4,
        required: true,
        messages: {
          required: "Esse campo é obrigatório"
        }
      },
      "user[cpf_cnpj]": {
        required: true,
        validCPF: true
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

    $(el).validate();

    let inputs = el.find(':input')

    inputs.each((index, input) => {
      let input_rules = rulesObj[input.name]
      if(input_rules) {
        $(input).rules('add', input_rules)
      }
    })
  }
}