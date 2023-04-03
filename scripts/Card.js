export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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
   this._card.remove()
  }

  _setEventListener() {
    this._likeElement.addEventListener('click', () => {
      this._likeCard()});

    const cardDelete = this._card.querySelector('.element__remove');
    cardDelete.addEventListener('click', () => {
      this._removeCard()});
  }

}




