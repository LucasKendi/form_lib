import {isMinLengthValid} from 'helper/validator'
import { isMinValueValid } from './validator'

class FieldHandler {
  constructor(type, element) {
    this.type = type
    this.element = element
  }

  handleField() {
    let isValid
    let errorMessage
    switch (this.type) {
      case 'name':
        isValid = isMinLengthValid(this.element, 4)
        errorMessage = 'Preencha seu nome completo'
        break
      case 'CPF':
        break
      case 'CNPJ':
        break
      case 'email':
        break
      case 'DDD':
        break
      case 'phone':
        break
      case 'balance':
        isValid = isMinValueValid(this.element, 0)
        errorMessage = 'Valor deve ser positivo'
        break
      default:
        break
    }

    if(!isValid) {
      $(this.element).addClass('error');
    } else {
      $(this.element).removeClass('error');
    }
  }
}

export default FieldHandler