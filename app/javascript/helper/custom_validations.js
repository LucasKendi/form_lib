function isValidCNPJ(cnpj){
  try {
    let length;
    let numbers;
    let digits;
    let sum;
    let pos;
    let result;
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14) return false;

    if (
      cnpj == '00000000000000' ||
      cnpj == '11111111111111' ||
      cnpj == '22222222222222' ||
      cnpj == '33333333333333' ||
      cnpj == '44444444444444' ||
      cnpj == '55555555555555' ||
      cnpj == '66666666666666' ||
      cnpj == '77777777777777' ||
      cnpj == '88888888888888' ||
      cnpj == '99999999999999'
    )
      return false;

    length = cnpj.length - 2;
    numbers = cnpj.substring(0, length);
    digits = cnpj.substring(length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(0)) return false;

    length += 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(1)) return false;

    return true;
  } catch (e) {
    return false;
  }
}

function isValidCPF(cpf){
  try {
    let sum;
    let mod;
    const strCPF = cpf.replace('-', '').replace('.', '').replace('.', '');
    sum = 0;
        // Elimina CPFs invalidos conhecidos
        if (
          strCPF == '00000000000' ||
          strCPF == '11111111111' ||
          strCPF == '22222222222' ||
          strCPF == '33333333333' ||
          strCPF == '44444444444' ||
          strCPF == '55555555555' ||
          strCPF == '66666666666' ||
          strCPF == '77777777777' ||
          strCPF == '88888888888' ||
          strCPF == '99999999999' ||
          strCPF == '12345678909'
        )
          return false;

    for (let i = 1; i <= 9; i++)
      sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    mod = (sum * 10) % 11;

    if (mod == 10 || mod == 11) mod = 0;
    if (mod != parseInt(strCPF.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    mod = (sum * 10) % 11;

    if (mod == 10 || mod == 11) mod = 0;
    if (mod != parseInt(strCPF.substring(10, 11))) return false;

    return true;
  } catch (e) {
    return false;
  }
}

export { isValidCNPJ, isValidCPF }
