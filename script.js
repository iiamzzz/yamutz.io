document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('order-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var formData = new FormData(form);
    var fullName = formData.get('fullName');
    var email = formData.get('email');
    var country = formData.get('country');
    var addressLine1 = formData.get('addressLine1');
    var addressLine2 = formData.get('addressLine2');
    var state = formData.get('state');
    var city = formData.get('city');
    var zipCode = formData.get('zipCode');
    var phoneNumber = formData.get('phoneNumber');
    var color = formData.get('color');
    var capacity = formData.get('capacity');
    var pieces = formData.get('pieces'); 

    // Send order confirmation email to the customer
    var customerTemplateParams = {
      recipientName: fullName,
      email: email,
      country: country,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      state: state,
      city: city,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      color: color,
      capacity: capacity,
      pieces: pieces
    };

    emailjs.send('service_i2qw759', 'template_t81j4kb', customerTemplateParams)
      .then(function (response) {
        console.log('Order confirmation email sent to the customer!', response.status, response.text);
      }, function (error) {
        console.error('Error sending order confirmation email:', error);
      });

    // Send order notification email to your inbox
    var adminTemplateParams = {
      recipientName: 'New Order',
      fullName: fullName,
      email: email,
      country: country,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      state: state,
      city: city,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      color: color,
      capacity: capacity,
      pieces: pieces
    };

    emailjs.send('service_i2qw759', 'template_2kfj26l', adminTemplateParams)
      .then(function (response) {
        console.log('Order notification email sent to your inbox!', response.status, response.text);
      }, function (error) {
        console.error('Error sending order notification email:', error);
      });

    // Reset the form after submission
    form.reset();
  });
});
