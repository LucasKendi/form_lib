$(document).on('turbolinks:load', () => {
  $("#myForm").validate({
    rules: {
      "user[name]": "required"
    }
  });
})
