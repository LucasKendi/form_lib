$(document).on('turbolinks:load', () => {
    var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 9 ? '00000-0000' : '0000-00009';
  },
  spOptions = {
    onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

  $('#user_phone_prefix').mask('(00)');
  $('#user_phone').mask(SPMaskBehavior, spOptions);
  $('#user_balance').mask('#.##0,00', {reverse: true});


  $(document).on('click', '#submit_form', event => {
    let form = $("#myForm")

    form.validate({
      rules: {
        "user[name]": {
          required: true,
          minlength: 4
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
    });

    if(form.valid()) {
      $('#user_phone_prefix').unmask();
      $('#user_phone').unmask();
      $('#user_balance').unmask();

      $('#myForm').submit()
    }
  })
})
