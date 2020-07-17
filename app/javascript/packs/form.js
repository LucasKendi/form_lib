import FieldHandler from 'helper/field_handler'

$(document).on('turbolinks:load', () => {
  let name = new FieldHandler('name',$('#user_name'))
  let balance = new FieldHandler('balance',$('#user_balance'))

  $(document).on('click', ':submit', event => {
    event.preventDefault();
    name.handleField()
    balance.handleField()

  });
})