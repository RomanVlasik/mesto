/*Открытие попапа*//*Открытие попапа*//*Открытие попапа*//*Открытие попапа*//*Открытие попапа*//*Открытие попапа*/

let popupOpen = document.querySelector('.popup');


function openOpenPopup() {
  popupOpen.classList.add('popup_opened');
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
};

formElement.addEventListener('submit', handleFormSubmit); 

let popupBut = document.querySelector('#popup__but');
popupBut.addEventListener('click', handleFormSubmit);




  


 











