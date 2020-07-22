import { SPMaskBehavior, spOptions } from 'helper/sp_mask'
import { CpfCnpjMaskBehavior, CpfCnpjOptions } from 'helper/cpf_cnpj_mask'
import { FormHandler } from 'helper/form_handler'

$(document).on('turbolinks:load', () => {
  FormHandler.handle($("#myForm"))

  $('#user_phone_prefix').mask('(00)');
  $('#user_cpf_cnpj').mask(CpfCnpjMaskBehavior, CpfCnpjOptions);
  $('#user_phone').mask(SPMaskBehavior, spOptions);
  $('#user_balance').mask('#.##0,00', {reverse: true});

  $(document).on('click', '#submit_form', event => {
    let form = $("#myForm")
    if(form.valid()) {
      $('#user_cpf_cnpj').unmask();
      $('#user_phone_prefix').unmask();
      $('#user_phone').unmask();
      $('#user_balance').unmask();

      $('#myForm').submit()
    }
  })
})
