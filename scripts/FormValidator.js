/*Класс FormValidator*/
export default class FormValidator {
  constructor(inputListSelector, formElement) {
    this._inputList = inputListSelector;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector('.popup__save-button');
  }

/*Добовление сообщения об ошибке*/
  _showInputError = (inputElement, errorMessage) => {
  const errorElement = inputElement.closest('.popup__field').querySelector('.popup__input-error'); // ссылка на span внутри формы
  inputElement.classList.add('popup__input_type_error'); // подчеркивает поле input красной линией
  errorElement.textContent = errorMessage; // вставляет в span текст ошибки
  errorElement.classList.add('popup__input-error_active'); // выводит сообщение об ошибке
}

/*Удаление сообщения об ошибке*/
  _hideInputError = inputElement => {
  const errorElement = inputElement.closest('.popup__field').querySelector('.popup__input-error');
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}

/*Проверка валидности поля*/
  _isValid = inputElement => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
}
/*Перебор массива ,поиск невалидного импута*/
  _hasInvalidInput = () => {
  return this._inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

/*Переключение активности кнопок симбит*/
  toggleButtonState = () => {
  if (this._hasInvalidInput(this._inputList)) {
    this._buttonElement.classList.add('popup__save-button_inactive');
    this._buttonElement.setAttribute('disabled', true);
  } else {
    this._buttonElement.classList.remove('popup__save-button_inactive');
    this._buttonElement.removeAttribute('disabled');
  }
}

/*Установка слушателя для добавления сообщений об ошибке*/
  _setEventListeners = () => {
    /*Неактивная кнопка при неверном заполнении*/
  this.toggleButtonState(this._buttonElement); 
  /*Установка слушателя для каждого импута,проверка на валидность*/
  this._inputList.forEach(inputElement => { 
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
      this.toggleButtonState(this._buttonElement);
    });
  });
}

/*Выполнение методов класса*/
  enableValidation = () => {
    this._setEventListeners();
  };
}

