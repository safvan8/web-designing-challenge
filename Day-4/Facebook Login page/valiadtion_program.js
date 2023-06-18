$(document).ready(function () {
  // Wait for the document to be ready

  $("#signup-form").validate({
    // Apply form validation using the jQuery Validation Plugin

    rules: {
      fname: {
        required: true,
        minlength: 4,
        maxlength: 10,
      },
      lname: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      userEmail: {
        required: true,
        email: true,
      },
      userPassword: {
        minlength: 6,
        maxlength: 50,
      },
      day: {
        // this will not allow empty double quote value selection
        required: true,
      },
      month: {
        required: true,
      },
    },

    // to provide custom messages for rules, default messages will not be diplyed if specified
    messages: {
      // validation messages to user for fname
      fname: {
        required: "First name is manadatory",
        minlength: "First name must contain atleast 4 chars",
      },
      day: {
        required: "Day selection is mandatory",
      },
    },
  });
});
