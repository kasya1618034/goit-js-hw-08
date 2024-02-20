import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextArea = document.querySelector('textarea[name="message"]');

const saveFormState = () => {
  const email = emailInput.value.trim();
  const message = messageTextArea.value.trim();
  const formData = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const fillFormFields = () => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    emailInput.value = formData.email;
    messageTextArea.value = formData.message;
  }
};

const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextArea.value = '';
};

feedbackForm.addEventListener('input', throttle(saveFormState, 500));

document.addEventListener('DOMContentLoaded', fillFormFields);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearFormState();
});
