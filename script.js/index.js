// отерытие и закрытие попапа
let profileEdit = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.button-close');

function showPopup () {
  popup.classList.add('popup_opened');
}
 
profileEdit.addEventListener('click', showPopup); 

function closePopup () {
  popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closePopup);

// function showAndClosePopup () {
 // popup.classList.toggle('popup_opened');
//}

//profileEdit.addEventListener('click', showAndClosePopup);

//popupClose.addEventListener('click', showAndClosePopup);


//добавление и сохранение информации

let userName = document.querySelector('.profile-info__title');
let userDescription = document.querySelector('.profile-info__subtitle');

let inputPopupName = document.querySelector('.popup-input__name');
let inputPopupDescription = document.querySelector('popup-input__description');

inputPopupName.value = userName.textContent;
inputPopupDescription.value = userDescription.textContent;

let popupSubmit = document.querySelector('.button-submit');
popupSubmit.addEventListener('click', save);

function save () {
  userName.textContent = inputPopupName.value;
  userDescription.textContent = inputPopupDescription.value;
  popup.classList.add('popup__opened');
  popup.classList.remove('popup__opened');
}



