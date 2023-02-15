let profileEdit = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.button-close');
let userNameElement = document.querySelector('.profile-info__title');
let userDescriptionElement = document.querySelector('.profile-info__subtitle');
let formElement = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup-input__name'); 
let inputDescription = document.querySelector('.popup-input__description'); 
let buttonSubmit = document.querySelector('.button-submit');

function showPopup () {
  popup.classList.add('popup_opened');
  inputName.value = userNameElement.textContent;
  inputDescription.value = userDescriptionElement.textContent;
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    userNameElement.textContent = inputName.value; 
    userDescriptionElement.textContent = inputDescription.value;
    closePopup();
}

profileEdit.addEventListener('click', showPopup); 
popupClose.addEventListener('click', closePopup);
buttonSubmit.addEventListener('click', handleFormSubmit);


































