export { openPopup, closePopup }

function openPopup (item) {
  item.classList.add('popup_opened');
  addPopupListeners(item);
}

function closePopup (item) {
  item.classList.remove('popup_opened');
  removePopupListeners(item);
}

function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closePopupClick(evt) {
  closePopup(evt.target);
}

function addPopupListeners (popup) {
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('mousedown', closePopupClick);
}

function removePopupListeners (popup) {
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('mousedown', closePopupClick);
}





