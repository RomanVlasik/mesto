const checkingValidation = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__craft',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: '.popup__button_type_inactive',
  inputErrorClass: '.popup__craft_type_error',
  errorClass: '.popup__input-error_type_active'
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__craft_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_type_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__craft_type_error');
    errorElement.classList.remove('popup__input-error_type_active');
    errorElement.textContent = '';
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_type_inactive');
      buttonElement.disabled = true;
    }
    else {
       buttonElement.classList.remove('popup__button_type_inactive');
       buttonElement.disabled = false;
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__craft'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__forms'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
      
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      });
    });
  };
  
  enableValidation(checkingValidation);