import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getAnimations('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()
}