import {isMinLengthValid} from 'helper/validator'
import { isMinValueValid } from './validator'

class FieldHandler {
  constructor(type, element) {
    this.type = type
    this.element = element
  }

  handleField() {
    let isValid = false
    let errorMessage
    let value = this.element.val()
    switch (this.type) {
      case 'name':
        isValid = isMinLengthValid(value, 4);
        errorMessage = 'Preencha seu nome completo';
        break;
      case 'CPF/CNPJ':
        switch (value.length) {
          case 11:
            // isValid = isValidCPF(value);
            errorMessage = 'Número de CPF invalido'
            break
          case 14:
            // isValid = isValidCNPJ(value);
            errorMessage = 'Número do CNPJ inválido';
            break;
          default:
            errorMessage = 'Informe o CPF ou CNPJ';
            break;
        }
        break
      case 'email':
        // isValid = isValidEmail(value);
        errorMessage = 'Email inválido';
        break
      case 'DDD':
        isValid = isMinLengthValid(value, 2);
        errorMessage = 'Preencha o DDD';
        break
      case 'phone':
        isValid = isMinLengthValid(value, 8);
        errorMessage = 'Preencha o número de telefone';
        break
      case 'balance':
        isValid = isMinValueValid(this.element, 0)
        errorMessage = 'Valor deve ser positivo'
        break
      default:
        break
    }

    $(this.element).siblings().remove()
    if(!isValid) {
      $(this.element).addClass('error');
      $(`<label>${errorMessage}</label>`).insertAfter($(this.element))
    } else {
      $(this.element).removeClass('error');
    }
  }
}

export default FieldHandler