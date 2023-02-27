 let profileEdit = document.querySelector('.profile-info__edit-button');
 let popup = document.querySelector('.popup');
 let popupClose = document.querySelector('.popup__button-close');
 let userNameElement = document.querySelector('.profile-info__title');
 let userDescriptionElement = document.querySelector('.profile-info__subtitle');
 let formElement = document.querySelector('.popup__form');
 let inputName = document.querySelector('.popup__input_type_name'); 
 let inputDescription = document.querySelector('.popup__input_type_description'); 

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
formElement.addEventListener('submit', handleFormSubmit);

// начало 5 проектной работы
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const buttonCloseCard = document.querySelector('.popup__button-close_card');

function showPopupAdd () {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd () {
  popupAdd.classList.remove('popup_opened');
}

buttonAdd.addEventListener('click', showPopupAdd);
buttonCloseCard.addEventListener('click', closePopupAdd);
//----------------------------------------------------------
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector(".elements");

function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector("#cardTemplate").content; // находим шаблон и его составляющие
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true); // клонируем составляющие шаблона

  cardElement.querySelector(".element__title").textContent = cardName;

  const cardImage = cardElement.querySelector(".element__image");
  cardImage.setAttribute('src', cardLink);
  cardImage.setAttribute('alt', cardName);
  return cardElement;
}

initialCards.forEach((cardValues) => {
  const card = createCard(cardValues.name, cardValues.link);
  elements.prepend(card);
});








