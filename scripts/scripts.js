/*Открытие попапа*//*Открытие попапа*//*Открытие попапа*//*Открытие попапа*//*Открытие попапа*//*Открытие попапа*/
let popupOpen = document.querySelector('.popup');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');

function openOpenPopup() {
  popupOpen.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

let buttonRectangle = document.querySelector('.profile__rectangle');
buttonRectangle.addEventListener('click', openOpenPopup);
/*Закрытие попапа*//*Закрытие попапа*//*Закрытие попапа*//*Закрытие попапа*//*Закрытие попапа*//*Закрытие попапа*/

function closeOpenPopup() {
  popupOpen.classList.remove('popup_opened');
}

let buttonPopupicon = document.querySelector('.popup__icon');
buttonPopupicon.addEventListener('click', closeOpenPopup);

/*Форма отправки на сервер*//*Форма отправки на сервер*//*Форма отправки на сервер*//*Форма отправки на сервер*//*Форма отправки на сервер*/
let formElement = document.querySelector('.popup__forms');
let nameInput = formElement.querySelector('#input-name');
let jobInput = formElement.querySelector('#input-worke');

function handleFormSubmit (evt) {
  evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closeOpenPopup();
};

formElement.addEventListener('submit', handleFormSubmit); 






  


 











