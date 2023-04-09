import { openPopup } from "./utils.js";
export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._popup = document.querySelector('.popup_type_card');
    this._popupImage = document.querySelector('.popup__card-image');
    this._caption = this._popup.querySelector('.popup__card-caption');
  }

  _openPopup = () => {
    this._caption.textContent = this._name;
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    openPopup(this._popup);
  }

  createCard() {
   this._card = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
   this._likeElement = this._card.querySelector('.element__like');
   this._image = this._card.querySelector('.element__image');
   this._image.src = this._link;
   this._image.alt = this._name;
   this._title = this._card.querySelector('.element__title');
   this._title.textContent = this._name;
   this._setEventListener();
    return this._card
}

  _likeCard() {
    this._likeElement.classList.toggle('element__like_active');
  }

  _removeCard() {
   this._card.remove();
   this._card = null
  }

  _setEventListener() {
    this._likeElement.addEventListener('click', () => {
      this._likeCard()});

    const cardDelete = this._card.querySelector('.element__remove');
    cardDelete.addEventListener('click', () => {
      this._removeCard()});
    
    this._image.addEventListener('click', this._openPopup);
  }
}





