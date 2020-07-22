import {SPMaskBehavior, spOptions } from 'helper/SPMask'
import { FormHandler } from 'helper/form_handler'

$(document).on('turbolinks:load', () => {
  FormHandler.handle($("#myForm"))

  $('#user_phone_prefix').mask('(00)');
  $('#user_phone').mask(SPMaskBehavior, spOptions);
  $('#user_balance').mask('#.##0,00', {reverse: true});

  $(document).on('click', '#submit_form', event => {
    let form = $("#myForm")
    if(form.valid()) {
      $('#user_phone_prefix').unmask();
      $('#user_phone').unmask();
      $('#user_balance').unmask();

      $('#myForm').submit()
    }
  })
})
