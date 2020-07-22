export class FormHandler {
  static handle(el) {
    $(el).validate();

    let inputs = el.find(':input')

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

    inputs.each((index, input) => {
      if((input.type !== 'hidden') && (input.type !== 'submit')) {
        let input_rules = rulesObj[input.name]
        if(input_rules) {
          $(input).rules('add', input_rules)
        }
      }
    })
  }
}