import { closeMenu } from './mobileMenu'

document.addEventListener('DOMContentLoaded', function () {
  // Элементы страницы
  const body = document.querySelector('body')
  const modalCall = document.querySelector('.modal-call')
  const callButtons = document.querySelectorAll('.call') // Все кнопки chat
  const modalCallCross = document.querySelector('.modal-call__cross')
  const modalOverlayClass = 'body--blur' // Класс для наложения блюра

  // Функция для открытия модального окна
  function openModalCall() {
    closeMenu()
    modalCall.classList.add('modal-call--opened')
    body.classList.add(modalOverlayClass) // Добавление эффекта размытия
  }

  // Функция для закрытия модального окна
  function closeModalCall() {
    modalCall.classList.remove('modal-call--opened')
    body.classList.remove(modalOverlayClass) // Удаление размытия
  }

  // Обработчики для всех кнопок chat
  callButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.stopPropagation() // Предотвращение всплытия события
      openModalCall()
    })
  })

  // Обработчик для кнопки закрытия
  modalCallCross.addEventListener('click', function (event) {
    event.stopPropagation() // Предотвращение всплытия события
    closeModalCall()
  })

  // Закрытие модального окна при клике вне его
  document.addEventListener('click', function (event) {
    if (!modalCall.contains(event.target)) {
      closeModalCall()
    }
  })

  // Закрытие модального окна при нажатии клавиши Esc
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModalCall()
    }
  })

  // Остановка закрытия при клике внутри модального окна
  modalCall.addEventListener('click', function (event) {
    event.stopPropagation()
  })
})
