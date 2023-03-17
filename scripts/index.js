 const profileEdit = document.querySelector('.profile-info__edit-button');
 const popup = document.querySelector('.popup');
 const popupElementsClose = document.querySelectorAll('.popup__button-close');
 const userNameElement = document.querySelector('.profile-info__title');
 const userDescriptionElement = document.querySelector('.profile-info__subtitle');
 const formElement = document.forms.userprofile;
 const inputName = document.querySelector('.popup__input_type_name');
 const inputDescription = document.querySelector('.popup__input_type_description');
 const popupEdit = document.querySelector('.popup_edit');
 const formCard = document.querySelector('.popup__form_type_card');
 const inputTitle = document.querySelector('.popup__input_type_title');
 const inputLinkImg = document.querySelector('.popup__input_type_link-img');
 const buttonAdd = document.querySelector('.profile__add-button');
 const popupAdd = document.querySelector('.popup_add');
 const elements = document.querySelector(".elements");
 const popupCard = document.querySelector('.popup_type_card');
 const popupCardImage = document.querySelector('.popup__card-image');
 const popupCardCaption = document.querySelector('.popup__card-caption');
 const cardTemplate = document.querySelector("#cardTemplate").content;
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

function addPopupListeners (popup) {
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('mousedown', closePopupClick);
};

function removePopupListeners (popup) {
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('mousedown', closePopupClick);
};

function closeEsc(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    }
};

 function closePopupClick(evt) {
  closePopup(evt.target);
 };

 function showPopupAddCard () {
  formCard.reset();
  openPopup(popupAdd);
  resetMistakes(popupAdd, config);
 };

 function showPopupEdit () {
   inputName.value = userNameElement.textContent,
   inputDescription.value = userDescriptionElement.textContent,
   openPopup(popupEdit);
   resetMistakes(popupEdit, config);
 }

 function openPopup (item) {
  item.classList.add('popup_opened');
  addPopupListeners(item);
 }

 popupElementsClose.forEach(item => {
  item.addEventListener('click', function () {
    const findPopup = item.closest('.popup');
    closePopup(findPopup);
  } )
 })

 function closePopup (item) {
   item.classList.remove('popup_opened');
   removePopupListeners(item);
 }

 function handleFormSubmit (evt) {
     evt.preventDefault();
     userNameElement.textContent = inputName.value,
     userDescriptionElement.textContent = inputDescription.value,
     closePopup(popupEdit)
 }

profileEdit.addEventListener('click', showPopupEdit);
formElement.addEventListener('submit', handleFormSubmit);
buttonAdd.addEventListener('click', showPopupAddCard);

function createCard(card) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__remove');
  const elementImage = cardElement.querySelector('.element__image');
  cardElement.querySelector(".element__title").textContent = card.name;

  cardElement.querySelector(".element__image").setAttribute('src', card.link);
  cardElement.querySelector(".element__image").setAttribute('alt', card.name);
  
  elementImage.addEventListener('click', function () {
    openPopupImage(card)
  });

//------------------------ функция лайка --------------------------------------------------

  cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })
//------------------------ удаление карточки ----------------------------------------------

  deleteButton.addEventListener('click', handleDeleteButtonClick);
  return cardElement;
}
//------------------------ функция удаления карточки --------------------------------------

function handleDeleteButtonClick (event) {
  const button = event.target;
  const card = button.closest('.element');
  card.remove()
}

function renderCard (item) {
  elements.prepend(createCard(item));
}

initialCards.forEach (cardItems => {
  renderCard(cardItems);
});

formCard.addEventListener('submit', addCards);

function addCards (card) {
  card.preventDefault();
  closePopup(popupAdd);
  renderCard ({
    name:inputTitle.value,
    link:inputLinkImg.value,
  });
  formCard.reset();
}

function openPopupImage (card) {
  popupCardImage.src = card.link,
  popupCardImage.alt = card.name,
  popupCardCaption.textContent = card.name,
  openPopup(popupCard);
}