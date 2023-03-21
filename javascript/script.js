const imge = document.querySelector('.profile__rectangle');
imge.addEventListener('click', function () {
    document.getElementById("myForm").style.display = "flex";
  });

const img = document.querySelector('.popup__icon');
img.addEventListener('click', function () {
    document.getElementById("myForm").style.display = "none";
  });

const div  = document.querySelector('.popup__button');
div.addEventListener('click', function refreshPage(){
    window.location.reload();
});


let formElement = document.querySelector('#popup__container');
let nameInput = popup__container.querySelector('.popup__subtitle');
let jobInput = popup__container.querySelector('.popup__craft');
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    document.getElementById('popup__subtitle').value
    document.getElementById('popup__craft').value
    let popup__subtitle = document.querySelector('popup__subtitle');
    console.log(section.textContent)
    let popup__craft  = document.querySelector('#popup__craft');
    console.log(section.textContent)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 


  


 











