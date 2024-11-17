import { closeMenu } from './mobileMenu'

document.addEventListener('DOMContentLoaded', function () {
  // Элементы страницы
  const body = document.querySelector('body')
  const modalFeedback = document.querySelector('.modal-feedback')
  const chatButtons = document.querySelectorAll('.chat') // Все кнопки chat
  const modalFeedbackCross = document.querySelector('.modal-feedback__cross')
  const modalOverlayClass = 'body--blur' // Класс для наложения блюра

  // Функция для открытия модального окна
  function openModalFeedback() {
    closeMenu()
    modalFeedback.classList.add('modal-feedback--opened')
    body.classList.add(modalOverlayClass) // Добавление эффекта размытия
  }

  // Функция для закрытия модального окна
  function closeModalFeedback() {
    modalFeedback.classList.remove('modal-feedback--opened')
    body.classList.remove(modalOverlayClass) // Удаление размытия
  }

  // Обработчики для всех кнопок chat
  chatButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.stopPropagation() // Предотвращение всплытия события
      openModalFeedback()
    })
  })

  // Обработчик для кнопки закрытия
  modalFeedbackCross.addEventListener('click', function (event) {
    event.stopPropagation() // Предотвращение всплытия события
    closeModalFeedback()
  })

  // Закрытие модального окна при клике вне его
  document.addEventListener('click', function (event) {
    if (!modalFeedback.contains(event.target)) {
      closeModalFeedback()
    }
  })

  // Закрытие модального окна при нажатии клавиши Esc
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModalFeedback()
    }
  })

  // Остановка закрытия при клике внутри модального окна
  modalFeedback.addEventListener('click', function (event) {
    event.stopPropagation()
  })
})
