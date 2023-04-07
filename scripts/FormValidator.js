export class FormValidator {
  constructor (config, form) {
    this._config = config;
    this.form = form;
    this._buttonElement = this.form.querySelector(this._config.submitButtonSelector);
    this._inputList = Array.from(this.form.querySelectorAll(this._config.inputSelector));
  }

  _showInputError(input) {
    const errorMessage = this.form.querySelector(`.${input.id}-error`);
    errorMessage.classList.add(this._config.errorClass);
    errorMessage.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  };
   
  _hideInputError(input) {
    const errorMessage = this.form.querySelector(`.${input.id}-error`);
    errorMessage.classList.remove(this._config.errorClass);
    errorMessage.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  };

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    };
  };

  _setEventListeners() {
    this._inputList.forEach((input) => {
     input.addEventListener('input', () => {
       this._isValid(input);
       this.toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  toggleButtonState() {
    if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    };
  };

  resetMistakes() {
    this.toggleButtonState();
    this._inputList.forEach(item => {
      this._hideInputError(item);
    });
  };
}

