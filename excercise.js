
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
alexey.ChangeSurname('Horbunov')
alexey.GetOlder(12)
alexey.MoveToSecondCourse()

alexey.getStudentInfo

// Имя Alex,
// Фамилия: Horbunov,
// Возраст: 31,
// Курс: 3


function sortWordsInTextByAlphabet(text) {

  const words = text.split(' ')

  const cleanWords = words.map(word => {
    const newWord = word.toLowerCase()
    return newWord.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/, '')
  })

  return cleanWords.sort()
}


const sortedWords = sortWordsInTextByAlphabet('Meet my family. There are five of us – my parents, my elder brother, my baby sister and me. First, meet my mum and dad, Jane and Michael. My mum enjoys reading and my dad enjoys playing chess with my brother Ken. My mum is slim and rather tall. She has long red hair and big brown eyes. She has a very pleasant smile and a soft voice. My mother is very kind and understanding. We are real friends. She is a housewife. As she has three children, she is always busy around the house. She takes care of my baby sister Meg, who is only three months old.')

console.log(sortedWords)
