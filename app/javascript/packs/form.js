import FieldHandler from 'helper/field_handler'

$(document).on('turbolinks:load', () => {
  let name = new FieldHandler('name',$('#user_name'));
  let cpf_cnpj = new FieldHandler('CPF/CNPJ',$('#user_cpf_cnpj'));
  let email = new FieldHandler('email',$('#user_email'));
  let phone_prefix = new FieldHandler('DDD',$('#user_phone_prefix'));
  let phone = new FieldHandler('phone',$('#user_phone'));
  let balance = new FieldHandler('balance',$('#user_balance'));

  $(document).on('click', ':submit', event => {
    event.preventDefault();

    name.handleField();
    cpf_cnpj.handleField();
    email.handleField();
    phone_prefix.handleField();
    phone.handleField();
    balance.handleField();
  });
})