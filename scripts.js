const formElementAdd = document.querySelector('#form-add');
const popupAdd = document.querySelector('.popup_addendum');
const placeInput = document.querySelector('#input-place');
const linkInput = document.querySelector('#input-link');
const buttonAdd = document.querySelector('.profile__addbutton');



/*Открытие попапа*/
/*Открытие попапа*//*Открытие попапа*/
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
const popupEdit = document.querySelector('.popup_type_edit-profile');

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
    closeOpenPopup(popupEdit);
};


formElement.addEventListener('submit', handleFormSubmit); 

/*Открытие добавление карточки*/
/*Открытие добавление карточки*//*Открытие добавление карточки*/
/*Открытие добавление карточки*//*Открытие добавление карточки*//*Открытие добавление карточки*//*Открытие добавление карточки*//*Открытие добавление карточки*/
let addendum = document.querySelector('.popup_addendum');


function openaddendum() {
  addendum.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

let buttonaddbutton = document.querySelector('.profile__addbutton');
buttonaddbutton.addEventListener('click', openaddendum);

/*Закрытие добавление карточки*/
/*Закрытие добавление карточки*//*Закрытие добавление карточки*/
/*Закрытие добавление карточки*//*Закрытие добавление карточки*//*Закрытие добавление карточки*//*Закрытие добавление карточки*//*Закрытие добавление карточки*/

function closeaddendum() {
  addendum.classList.remove('popup_opened');
}

let buttonpopupiconaddendum = document.querySelector('.popup__icon_addendum');
buttonpopupiconaddendum.addEventListener('click', closeaddendum);

/*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ /*НОВЫЙ ИНТЕРАКТИВ*/ 
/*Добовление карточек через JS*//*Добовление карточек через JS*//*Добовление карточек через JS*//*Добовление карточек через JS*//*Добовление карточек через JS*/
const cardTemplate = document.querySelector('#elements__element').content;
const element = document.querySelector('#elements__id');
const elementElement = cardTemplate.querySelector('.elements__element');

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


/*открытие попапа*/
function openPopup (item) {
  item.classList.add('popup_opened');
};

/*закрытие попапа*/
function closePopup (item) {
  item.classList.remove('popup_opened');
};

/*добавление новой карточки*//*добавление новой карточки*//*добавление новой карточки*//*добавление новой карточки*//*добавление новой карточки*//*добавление новой карточки*/
function handleSubmitAddCard (evt) {
  evt.preventDefault();
  const newCardElement = createCard(evt);
  element.prepend(newCardElement);
  closePopup(popupAdd);
};

/*Создание карточки*/
function createCard (item) {
  const elementElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  elementElement.querySelector('.elements__maskgroup').src = item.link || linkInput.value;
  elementElement.querySelector('.elements__text').textContent = item.name || placeInput.value;
  elementElement.querySelector('.elements__maskgroup').alt = item.name || placeInput.value;
  elementElement.querySelector('.elements__maskgroup').addEventListener('click', function(evt){
    openImgPopup(evt);
  });
  return elementElement;
};

/*Добавление карточки*/
function addCard(item) {
  element.append(item);
};

/*Рендер карточки*/
function renderCards () {
  initialCards.forEach(item => {
    const cardElement = createCard(item);
    addCard(cardElement);
  });
};
renderCards();

/*Слушатель открытия попапа добавления карточки*/
buttonAdd.addEventListener('click', function(){
  placeInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
});


/*Слушатель добавления новой карточки*/
formElementAdd.addEventListener('submit', handleSubmitAddCard);


/*Организатор событий по event*/
element.addEventListener('click', evt => {
  handleRemoveCard(evt);
  handleCardLike(evt);
});

/*Функция для удаления по клику на корзинку*//*Функция для удаления по клику на корзинку*//*Функция для удаления по клику на корзинку*//*Функция для удаления по клику на корзинку*/
function handleRemoveCard(evt) {
  if (evt.target.classList.contains('element__basket')) {
    const cardTarget = evt.target.closest('.elements__element');
  cardTarget.remove();
  };
};

