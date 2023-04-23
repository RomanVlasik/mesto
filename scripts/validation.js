const checkingValidation = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__craft',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_inactive',
  inputErrorClass: 'popup__craft_type_error',
  errorClass: 'popup__input-error_type_active'
};

const showInputError = (formElement, inputElement, errorMessage, checkingValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(checkingValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(checkingValidation.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, checkingValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(checkingValidation.inputErrorClass);
    errorElement.classList.remove(checkingValidation.errorClass);
    errorElement.textContent = '';
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, checkingValidation);
    } else {
      hideInputError(formElement, inputElement, checkingValidation);
    }
  };
/*Как сделать ,чтобы при добавлении новой карточки за другой форма была неактивна я не понимаю*/
  const toggleButtonState = (inputList, buttonElement, checkingValidation) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(checkingValidation.inactiveButtonClass);
      buttonElement.disabled = true;
    }
    else {
       buttonElement.classList.remove(checkingValidation.inactiveButtonClass);
       buttonElement.disabled = false;
    }
  };
  
  const setEventListeners = (formElement, checkingValidation) => {
    const inputList = Array.from(formElement.querySelectorAll(checkingValidation.inputSelector));
    const buttonElement = formElement.querySelector(checkingValidation.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, checkingValidation);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, checkingValidation);
        toggleButtonState(inputList, buttonElement, checkingValidation);
      });
    });
  };
  /*Можно подробнее ,как исправить эту ошибку не понимаю*/
  const enableValidation = (checkingValidation) => {
    const formList = Array.from(document.querySelectorAll(checkingValidation.formSelector));
    formList.forEach(() => {
      const operabilityForm = Array.from(document.querySelectorAll(checkingValidation.formSelector));
      operabilityForm.forEach((fieldSet) => {
        setEventListeners(fieldSet, checkingValidation);
      });
    });
  };
  
  enableValidation(checkingValidation);/* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* */

  formElement.addEventListener('reset', () => {
    // тут нужно вызвать твою функцию изменения состояние кнопки
  })