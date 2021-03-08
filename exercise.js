
class Student {

  constructor(name, surname, age, course) {
    this.name = name
    this.surname = surname
    this.age = age
    this.course = course
  }

  get getStudentInfo() {
    console.log(`
    Имя ${this.name}, 
    Фамилия: ${this.surname}, 
    Возраст: ${this.age}, 
    Курс: ${this.course}`)
  }

  GetOlder(years) {
    return this.age += years
  }

  ChangeSurname(surname) {
    return this.surname = surname
  }

  MoveToSecondCourse() {
    return this.course += 1
  }
}

const alexey = new Student('Alex', 'Gorbunov', 19, 2)

window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.submit__button')
  const form = document.querySelector('.student__form')
  const goToNextCourseBtn = document.querySelector('.go_to_next_course')
  const changeAgeBtn = document.querySelector('.change__age')
  const changeSurnameBtn = document.querySelector('.change__surname')
  const getInfoBtn = document.querySelector('.get_info')

  const fdata = {}
  let student
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    for(let [name, value] of formData) {
      fdata[name] = value
    }
    console.log(fdata)
    student = new Student(fdata.firstName, fdata.surname, fdata.age, fdata.course)
    localStorage.setItem('values', JSON.stringify(fdata))
  })

  goToNextCourseBtn.addEventListener('click', () => {

    const course = +JSON.parse(localStorage.getItem('values')).course
    student.MoveToSecondCourse()
    fdata['course'] = course + 1
    localStorage.setItem('values', JSON.stringify(fdata))
    alert(`Теперь вы на ${course + 1} курсе`)
  })

  changeAgeBtn.addEventListener('click' , () => {
    const oldAge = +JSON.parse(localStorage.getItem('values')).age
    const age = +prompt('введите новый возраст числом')
    fdata['age'] = age + oldAge
    student.GetOlder(age)
    localStorage.setItem('values', JSON.stringify(fdata))
    alert(`Теперь вам ${age + oldAge} лет`)
  })

  changeSurnameBtn.addEventListener('click', () => {
    // const olSurname = JSON.parse(localStorage.getItem('values')).surname
    const surname = prompt('Введите новую фамилию')
    fdata['surname'] = surname
    student.ChangeSurname(surname)
    localStorage.setItem('values', JSON.stringify(fdata))
    alert(`Теперь у вас такая фамилия: ${surname}`)
  })


  getInfoBtn.addEventListener('click', () => {
    alert(localStorage.getItem('values'))
  })


})


function sortWordsInTextByAlphabet(text) {

  const words = text.split(' ')

  const cleanWords = words.map(word => {
    const newWord = word.toLowerCase()
    return newWord.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/, '')
  })

  return cleanWords.sort()
}

const text = 'Meet my family. There are five of us – my parents, my elder brother, my baby sister and me. First, meet my mum and dad, Jane and Michael. My mum enjoys reading and my dad enjoys playing chess with my brother Ken. My mum is slim and rather tall. She has long red hair and big brown eyes. She has a very pleasant smile and a soft voice. My mother is very kind and understanding. We are real friends. She is a housewife. As she has three children, she is always busy around the house. She takes care of my baby sister Meg, who is only three months old.'
console.log(text)

const sortedWords = sortWordsInTextByAlphabet(text)


console.log(sortedWords)
