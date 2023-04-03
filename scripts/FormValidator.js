export class FormValidator {
  constructor (config, form) {
    this._config = config;
    this._form = form;
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
  }

  enableValidation() {
    this._setEventListeners();
  };

  _showInputError(input) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    errorMessage.classList.add(this._config.errorClass);
    errorMessage.textContent = error;
    input.classList.add(this._config.inputErrorClass);
  };
   
  _hideInputError(input) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    errorMessage.classList.remove(this._config.errorClass);
    errorMessage.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  };

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    };
  };

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._config.inactiveButton);
        this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButton);
      this._buttonElement.removeAttribute('disabled', '');
    };
  };

  _setEventListeners() {
    this._inputsList.forEach(() => {
     input.addEventListener('input', () => {
       this._isValid();
       this._toggleButtonState();
     });
    });
   };

   _hasInvalidInput() {
    return this._inputList.some(() => {
      return !inputElement.validity.valid;
    });
  };
  
  _resetMistakes() {
    this._inputsList.forEach(() => {
      this._hideInputError();
    });
  
    this._toggleButtonState();
  };

}