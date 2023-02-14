let profileEdit = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.button-close');

function showPopup () {
  popup.classList.add('popup_opened');
}
 
profileEdit.addEventListener('click', showPopup); 

console.log(popup.classList);

//profileEdit.addEventListener('click', showPopup) {
  function showPopup() {
    popup.classList.add('popup__opened');
  }
//}


//function closePopup() {
//  popup.classList.remove('popup__opened');
//}



//popupClose.addEventListener('click', closePopup);