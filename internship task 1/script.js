document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const portfolio = document.getElementById('portfolio').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const messageType = document.querySelector('input[name="message_type"]:checked');
  const responseMessage = document.getElementById('responseMessage');

  // Clear previous response
  responseMessage.textContent = '';
  responseMessage.style.color = '';

  if (!name || !portfolio || !subject || !message || !messageType) {
    event.preventDefault(); // Stop submission
    responseMessage.textContent = 'Please fill in all the fields and select a message type!';
    responseMessage.style.color = 'red';
  } else {
    event.preventDefault(); // Simulate sending
    responseMessage.textContent = 'Your message has been sent successfully!';
    responseMessage.style.color = 'green';

    // Optionally clear form
    document.getElementById('contactForm').reset();
  }
});
