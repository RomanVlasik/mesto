/** Константы кнопок на странице */
const editBtnElement = document.querySelector('.profile__edit-button'); // ссылка на кнопку "редактировать профиль"
const addBtnElement = document.querySelector('.profile__add-button'); // ссылка на кнопку "добавить новую карточку"

/*Попап Редактировать профиль*/
const popupProfileElement = document.querySelector('.popup_type_profile'); // ссылка на popup для редактирования профиля
const inputListSelectorPopupProfile = Array.from(popupProfileElement.querySelectorAll('.popup__input')); // массив со ссылками на все поля input в форме

const popupProfileForm = popupProfileElement.querySelector('.popup__input-list'); // ссылка на форму
const popupNameElement = popupProfileElement.querySelector('#name-input'); // ссылка на поле "имя" в попапе
const popupAboutElement = popupProfileElement.querySelector('#about-input'); // ссылка на поле "описание" в попапе

const profileElement = document.querySelector('.profile'); // ссылка на профиль
const profileNameElement = profileElement.querySelector('.profile__title'); // ссылка на имя (Жак-Ив Кусто) на странице
const profileAboutElement = profileElement.querySelector('.profile__subtitle'); // ссылка на описание (Исследователь океана) на странице

/**Попап добавления новой кароточки элементов*/
const popupCardsElement = document.querySelector('.popup_type_cards'); // ссылка на popup для добавления новой карточки
const inputListSelectorPopupCards = Array.from(popupCardsElement.querySelectorAll('.popup__input')); // массив со ссылками на все поля input в форме

const popupCardsForm = popupCardsElement.querySelector('.popup__input-list'); // ссылка на форму
const popupPlaceElement = popupCardsElement.querySelector('#place-input'); // ссылка на поле "название места" в попапе
const popupLinkElement = popupCardsElement.querySelector('#url-input'); // ссылка на поле "ссылка на картинку" в попапе

/** Попап открытия картинки на весь экран */
 const popupImageElement = document.querySelector('.popup_type_image'); // ссылка на popup для просмотра картики

/** Блок карточек */
const listElement = document.querySelector('.cards__list'); // ссылка на родителя (куда вставить темплейт)

/*Функция открыть попап*/
const openPopup = item => {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEscBtn);
};

export {openPopup};
/*Функция закрыть попап*/
const closePopup = item => {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEscBtn);
};

/*Закрыть попап при нажатии на ESC*/
const closePopupWithEscBtn = evt => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

/*Функция закрыть попап на крестик или оверлей*/
const closePopupWithClick = evt => {
  const openedPopup = document.querySelector('.popup_opened');
  const closeBtnElement = openedPopup.querySelector('.popup__close-button');
  if (evt.target.contains(closeBtnElement)) {
    closePopup(openedPopup);
  };
};

/*Изменение данных на профиле на странице*/
const changeProfileData = evt => {
  evt.preventDefault();
  profileNameElement.textContent = popupNameElement.value;
  profileAboutElement.textContent = popupAboutElement.value;
  closePopup(popupProfileElement);
};

/*Вставка карточек в разметку*/
import {initialCards} from "./initialCards.js";
import Card from "./Card.js";

/*Функция создания карточки и возврата в разметку*/
const createCard = (name, link) => {
  const card = new Card({name, link}, '#template');
  const generatedCard = card.generateCard();
  return generatedCard;
};

/*Функция отвечающая за место вставки кода*/
const renderCard = (name, link) => {
  listElement.prepend(createCard(name, link));
};

/*Функция обработчик события для новой карточки*/
const addNewCard = evt => {
  evt.preventDefault();
  renderCard(popupPlaceElement.value, popupLinkElement.value);
  closePopup(popupCardsElement);
  popupCardsForm.reset();  /*Обнуление значений полей в форме в попапе*/
};

/*Переборка исходного массива и отрисовка карточек по порядку*/
initialCards.reverse().forEach(item => renderCard(item.name, item.link));

/*Редактирование профиля*/
/*Открытие попапа при клике на кнопку редактировать*/
editBtnElement.addEventListener('click', () => {
  popupNameElement.value = profileNameElement.textContent;
  popupAboutElement.value = profileAboutElement.textContent;
  openPopup(popupProfileElement);
});
/*Закрытие попапа при нажатии на крестик или оверлей*/
popupProfileElement.addEventListener('click', closePopupWithClick);
/*Изменение данных профиля при клике на кнопку сохранить*/
popupProfileForm.addEventListener('submit', changeProfileData);

/*Функция добавления новой карточки ,открытие попапа при клике на кнопку добавить*/
addBtnElement.addEventListener('click', () => {
openPopup(popupCardsElement);
newCardValidation.toggleButtonState();
});
/*Закрытие попапа при клике на оверлей или крестик*/
popupCardsElement.addEventListener('click', closePopupWithClick);
/*Добавить новую карточку на страницу*/
popupCardsForm.addEventListener('submit', addNewCard);

/*Закрытие попапа при клике на крестик или оверлей*/
popupImageElement.addEventListener('click', closePopupWithClick);

/*Подключение валидации формы*/
import FormValidator from "./FormValidator.js";

const profileValidation = new FormValidator(inputListSelectorPopupProfile, popupProfileElement);
const newCardValidation = new FormValidator(inputListSelectorPopupCards, popupCardsElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();
