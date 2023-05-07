/*ссылка на popup для просмотра картики*/
const popupImageElement = document.querySelector('.popup_type_image');
/*ссылка на подпись к картинке*/
const popupFigcaptionElement = popupImageElement.querySelector('.popup__figcaption'); 
/*ссылка на картинку в попапе*/
const popupImgElm = popupImageElement.querySelector('.popup__image');
/*Импорт класса*/
import {openPopup} from './index.js';
/*Класс кард*/
export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
/*Клонирование темлейт из html в DOM*/
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector) /*Использование селектора для карточки*/
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }
  /*Генерируем карточку,наполняем контент содержимым*/
  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardElementTitle = this._cardElement.querySelector('.card__title');
    this._cardElementImage = this._cardElement.querySelector('.card__image');

    this._cardElementTitle.textContent = this._name;
    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = `${this._name}. Фотография`;

    this._likeButton = this._cardElement.querySelector('.card__like-button');

    this._setEventListeners();

    return this._cardElement;
  }
/*Установка слушателя собыьий в сгенерированной карточке заместо в темплейте*/
  _setEventListeners() {
    /*Установка слушателя на картинку*/
    this._cardElementImage.addEventListener('click', () => {
      this._addDataToPopupImg(this._name, this._link);
      openPopup(popupImageElement);
    });
    /*Установка слушателя на кнопку лайка*/
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

   /*Установка слушателя на кнопку попапа для удаления карточки*/
    this._cardElement.querySelector('.card__del-button').addEventListener('click', evt => {
      this._cardElement.remove();
      this._cardElement = null;
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('card__like-button_active');
  }
  
/*Наполнение попапа картинки контентом*/
  _addDataToPopupImg = (name, link) => {
    popupFigcaptionElement.textContent = name;
    popupImgElm.src = link;
    popupImgElm.alt = `${name}. Фотография`;
  }
}
