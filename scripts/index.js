import { Card } from './Card.js';
import { config, initialCards } from './constants.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './utils.js';

 const profileEdit = document.querySelector('.profile-info__edit-button');
 const popupAddOpen = document.querySelector('.popup_add');
 const popupEditOpen = document.querySelector('.popup_edit')
 const popupForms = document.querySelectorAll('.popup__form');
 const popupElementsClose = document.querySelectorAll('.popup__button-close');
 const userNameElement = document.querySelector('.profile-info__title');
 const userDescriptionElement = document.querySelector('.profile-info__subtitle');
 const formElement = document.forms.userprofile;
 const cardPopup = document.querySelector('.popup__form_type_card');
 const inputName = document.querySelector('.popup__input_type_name');
 const inputDescription = document.querySelector('.popup__input_type_description');
 const popupFormEdit = new FormValidator(config, document.querySelector('.popup__form_type_profile'));
 const inputTitle = document.querySelector('.popup__input_type_title');
 const inputLinkImg = document.querySelector('.popup__input_type_link-img');
 const buttonAdd = document.querySelector('.profile__add-button');
 const popupAdd = new FormValidator(config, document.querySelector('.popup__form_type_card'));
 const elements = document.querySelector('.elements');
 const popupCard = document.querySelector('.popup_type_card');
 const popupCardImage = document.querySelector('.popup__card-image');
 const popupCardCaption = document.querySelector('.popup__card-caption');
 const cardTemplate = document.querySelector('#cardTemplate').content;
 const popupButtonSubmit = document.querySelector('.popup__button-submit');

 function showPopupEdit () {
  inputName.value = userNameElement.textContent,
  inputDescription.value = userDescriptionElement.textContent,
  popupFormEdit.resetMistakes();
  openPopup(popupEditOpen);
 }

 popupElementsClose.forEach(item => {
  const findPopup = item.closest('.popup');
  item.addEventListener('click', function () { 
    closePopup(findPopup);
  });
 });

 function handleFormSubmit (evt) {
  evt.preventDefault();
  userNameElement.textContent = inputName.value,
  userDescriptionElement.textContent = inputDescription.value,
  closePopup(popupEditOpen)
 }

profileEdit.addEventListener('click', showPopupEdit);
formElement.addEventListener('submit', handleFormSubmit);

function createCard (item) {
  const card = new Card (item, "#cardTemplate");
  return card.createCard();
}

function renderCard (block, item) {
  block.prepend(item);
}

initialCards.forEach (cardItems => {
  renderCard(elements, createCard(cardItems));
});

popupForms.forEach(item => {
  const formValidator = new FormValidator (config, item);
  formValidator.enableValidation();
}); 

function addCards (card) {
  card.preventDefault();
  closePopup(popupAddOpen);
  renderCard (elements, createCard ({name:inputTitle.value,
    link:inputLinkImg.value}));
}

buttonAdd.addEventListener('click', showPopupAddCard);

function showPopupAddCard () {
  cardPopup.reset();
  popupAdd.resetMistakes();
  openPopup(popupAddOpen);
 }

popupAdd.form.addEventListener('submit', addCards);

