 let profileEdit = document.querySelector('.profile-info__edit-button');
 let popup = document.querySelector('.popup');
 let popupClose = document.querySelector('.popup__button-close');
 let userNameElement = document.querySelector('.profile-info__title');
 let userDescriptionElement = document.querySelector('.profile-info__subtitle');
 let formElement = document.querySelector('.popup__form');
 let inputName = document.querySelector('.popup__input_type_name'); 
 let inputDescription = document.querySelector('.popup__input_type_description'); 
 const buttonCloseCard = document.querySelectorAll('.popup__button-close_card');

 function showPopup () {
   popup.classList.add('popup_opened');
   inputName.value = userNameElement.textContent;
   inputDescription.value = userDescriptionElement.textContent;
 }

 buttonCloseCard.forEach(item => {
  item.addEventListener('click', function () {
    const findPopup = item.closest('.popup');
    closePopup(findPopup);
  } )
 })

 function closePopup (item) {
   item.classList.remove('popup_opened');
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

function showPopupAdd () {
  popupAdd.classList.add('popup_opened');
}

buttonAdd.addEventListener('click', showPopupAdd);
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

function createCard(card) {
  const cardTemplate = document.querySelector("#cardTemplate").content; 
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true); 

  cardElement.querySelector(".element__title").textContent = card.name;

  cardElement.querySelector(".element__image").setAttribute('src', card.link);
  cardElement.querySelector(".element__image").setAttribute('alt', card.name);

// ------------------------ функция лайка --------------------------------------------------
  cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })
// ------------------------ удаление карточки ----------------------------------------------
  const deleteButton = cardElement.querySelector('.element__remove')
  deleteButton.addEventListener('click', handleDeleteButtonClick)
  return cardElement;
}
// ------------------------ функция удаления карточки --------------------------------------
function handleDeleteButtonClick (event) {
  const button = event.target
  const card = button.closest('.element')
  card.remove()
}

function renderCard (item) {
  elements.prepend(createCard(item));
}

initialCards.forEach (cardItems => {
  renderCard(cardItems) 
});

const formCard = document.querySelector('.popup__form_type_card');
formCard.addEventListener('submit', addCards);
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLinkImg = document.querySelector('.popup__input_type_link-img');

function addCards (card) {
  card.preventDefault();
  closePopup(popupAdd);
  renderCard ({
    name:inputTitle.value, 
    link:inputLinkImg.value,
  })
}





