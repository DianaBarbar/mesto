// валидация попапа редактирования
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'input-error_active'
};

const showInputError = (form, input, config, error) => {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  errorMessage.classList.add(config.errorClass);
  errorMessage.textContent = error;
  input.classList.add(config.inputErrorClass);
};
 
const hideInputError = (form, input, config) => {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  errorMessage.classList.remove(config.errorClass);
  errorMessage.textContent = '';
  input.classList.remove(config.inputErrorClass);
  console.log('gjghj');
};

const isValid = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, config, input.validationMessage);
  } else {
    hideInputError(form, input, config);
  };
};

const setEventListeners = (formElements, config) => {
 const inputsList = Array.from(formElements.querySelectorAll(config.inputSelector));
 const buttonElement = formElements.querySelector(config.submitButtonSelector);
 inputsList.forEach((input) => {
  input.addEventListener('input', () => {
    isValid(formElements, input, config);
    toggleButtonState(inputsList, buttonElement, config);
  });
 });
};

const enableValidation = (config) => {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));

  formsList.forEach((form) => {
    setEventListeners(form, config);
  });
};

enableValidation(config);

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', '');
  };
};

const resetMistakes = (popup, config) => {
  const inputsList = Array.from(popup.querySelectorAll(config.inputSelector));
  const submitButton = popup.querySelector(config.submitButtonSelector);
  inputsList.forEach((input) => {
    hideInputError(popup, input, config);
  });

  toggleButtonState(inputsList, submitButton, config);
};





