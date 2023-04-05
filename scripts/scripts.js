/*Введение переменных*/
const profilePopup = document.querySelector('.popup_type_edit-profile');
const cardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_image_magnification-fullscreen');
const formElementAdd = document.querySelector('#form-add');
const placeInput = document.querySelector('#input-place');
const linkInput = document.querySelector('#input-link');
const buttonAdd = document.querySelector('.profile__addbutton');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const buttonRectangle = document.querySelector('.profile__rectangle');
const buttonPopupicon = document.querySelector('.popup__icon');
const editProfile = document.querySelector('#form-edit');
const nameInput = editProfile.querySelector('#input-name');
const jobInput = editProfile.querySelector('#input-worke');
const addendum = document.querySelector('.popup_type_add-card');
const buttonaddbutton = document.querySelector('.profile__addbutton');
const buttonPopupIconAddendum = document.querySelector('.popup__icon_addendum');
const cardTemplate = document.querySelector('#elements__element').content;
const element = document.querySelector('#elements__id');
const elementElement = cardTemplate.querySelector('.elements__element');
const imageFromPopup = document.querySelector('.popup__image');
const textFromPopup = document.querySelector('.popup__text');
const buttonCloseImage = document.querySelector('.popup__close');
const formElementEdit = document.querySelector('#form-edit');



/*Массив карточек JS*/
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

/*Изменение имени и профессии*/
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(profilePopup);
}
/*Слушатель Изменение имени и профессии*/
formElementEdit.addEventListener('submit', handleSubmitProfileForm);

/*Открытие формы редактирования*/
buttonRectangle.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(profilePopup);
});

/*Закрытие формы редактирования*/
buttonPopupicon.addEventListener('click', function() {
  closePopup(profilePopup);
});

/*Форма отправки на сервер*/
function handleFormSubmit (evt) {
  evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closeOpenPopup(profilePopup);
};

/*слушатель формы отправки на сервер*/
editProfile.addEventListener('submit', handleFormSubmit); 

/*Открытие добавление карточки*/
function openAddendum() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(cardPopup);
}

/* Слушатель Открытие добавление карточки*/
buttonaddbutton.addEventListener('click', openAddendum);

/*Закрытие добавление карточки*/
function closeAddendum() {
  closePopup(cardPopup);
}

/*Слушатель Закрытие добавление карточки*/
buttonPopupIconAddendum.addEventListener('click', closeAddendum);

/*добавление новой карточки*/
/*Здесь надеюсь верно исправил если нет то я не понимаю ,что сюда подставить*/
/*Жду help me*/
function handleSubmitAddCard (evt) {
  evt.preventDefault();
  const newCardElement = createCard(initialCards);
  element.prepend(newCardElement);
  closePopup(cardPopup);
};

const elemeMask = elementElement.querySelector('.elements__maskgroup');

/*Создание карточки*/
/*Если я удаляю linkInput.value и т.д добавление карточек становиться неправильно,а как сделать я не знаю в пачке ответа не дают */
/*Когда я заменяю elementElement.querySelector('.elements__maskgroup') на константу выше elemeMask верстка работает некорректно*/
/*Жду help me*/
function createCard (item) {
  const elementElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  elementElement.querySelector('.elements__maskgroup').src = item.link || linkInput.value;
  elementElement.querySelector('.elements__text').textContent = item.name || placeInput.value;
  elementElement.querySelector('.elements__maskgroup').alt = item.name || placeInput.value;
  elementElement.querySelector('.elements__maskgroup').addEventListener('click', function(evt){
    openimagePopup(evt);
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
  openPopup(cardPopup);
});

/*Слушатель добавления новой карточки*/
formElementAdd.addEventListener('submit', handleSubmitAddCard);

/*Организатор событий по event*/
element.addEventListener('click', evt => {
  handleRemoveCard(evt);
  handleCardLike(evt);
});

/*Функция для удаления по клику на корзинку*/
function handleRemoveCard(evt) {
  if (evt.target.classList.contains('element__basket')) {
    const cardTarget = evt.target.closest('.elements__element');
  cardTarget.remove();
  };
};

/*Функция для лайков*/
function handleCardLike(evt) {
  if (evt.target.classList.contains('elements__image')) {
    evt.target.classList.toggle('elements__imagez');
  };
};

/*Функция открытие попапа картинки на весь экран*/
function openimagePopup(evt) {
  createimagePopup(evt);
  openPopup(imagePopup);
};

/*Слушатель закрытия попапа картинки на весь экран*/
buttonCloseImage.addEventListener('click', function() {
  closePopup(imagePopup);
});

/*Функция создания попапа с картинками на весь экран*/
function createimagePopup(evt) {
  const eTarget = evt.target;
  imageFromPopup.src = eTarget.src;
  textFromPopup.textContent = eTarget.alt;
  imageFromPopup.alt = eTarget.alt;
};




  


 











