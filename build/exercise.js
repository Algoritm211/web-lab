/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./exercise.js ***!
  \*********************/
eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Student = /*#__PURE__*/function () {\n  function Student(name, surname, age, course) {\n    _classCallCheck(this, Student);\n\n    this.name = name;\n    this.surname = surname;\n    this.age = age;\n    this.course = course;\n  }\n\n  _createClass(Student, [{\n    key: \"getStudentInfo\",\n    get: function get() {\n      console.log(\"\\n    \\u0418\\u043C\\u044F \".concat(this.name, \", \\n    \\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F: \").concat(this.surname, \", \\n    \\u0412\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442: \").concat(this.age, \", \\n    \\u041A\\u0443\\u0440\\u0441: \").concat(this.course));\n    }\n  }, {\n    key: \"GetOlder\",\n    value: function GetOlder(years) {\n      return this.age += years;\n    }\n  }, {\n    key: \"ChangeSurname\",\n    value: function ChangeSurname(surname) {\n      return this.surname = surname;\n    }\n  }, {\n    key: \"MoveToSecondCourse\",\n    value: function MoveToSecondCourse() {\n      return this.course += 1;\n    }\n  }]);\n\n  return Student;\n}();\n\nvar alexey = new Student('Alex', 'Gorbunov', 19, 2); // alexey.ChangeSurname('Horbunov')\n// alexey.GetOlder(12)\n// alexey.MoveToSecondCourse()\n//\n// alexey.getStudentInfo\n// Имя Alex,\n// Фамилия: Horbunov,\n// Возраст: 31,\n// Курс: 3\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var submitButton = document.querySelector('.submit__button');\n  var form = document.querySelector('.student__form');\n  var goToNextCourseBtn = document.querySelector('.go_to_next_course');\n  var changeAgeBtn = document.querySelector('.change__age');\n  var changeSurnameBtn = document.querySelector('.change__surname');\n  var getInfoBtn = document.querySelector('.get_info');\n  var fdata = {};\n  var student;\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var formData = new FormData(form);\n\n    var _iterator = _createForOfIteratorHelper(formData),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            name = _step$value[0],\n            value = _step$value[1];\n\n        fdata[name] = value;\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    console.log(fdata);\n    student = new Student(fdata.firstName, fdata.surname, fdata.age, fdata.course);\n    localStorage.setItem('values', JSON.stringify(fdata));\n  });\n  goToNextCourseBtn.addEventListener('click', function () {\n    var course = +JSON.parse(localStorage.getItem('values')).course;\n    student.MoveToSecondCourse();\n    fdata['course'] = course + 1;\n    localStorage.setItem('values', JSON.stringify(fdata));\n    alert(\"\\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u0432\\u044B \\u043D\\u0430 \".concat(course + 1, \" \\u043A\\u0443\\u0440\\u0441\\u0435\"));\n  });\n  changeAgeBtn.addEventListener('click', function () {\n    var oldAge = +JSON.parse(localStorage.getItem('values')).age;\n    var age = +prompt('введите новый возраст числом');\n    fdata['age'] = age + oldAge;\n    student.GetOlder(age);\n    localStorage.setItem('values', JSON.stringify(fdata));\n    alert(\"\\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u0432\\u0430\\u043C \".concat(age + oldAge, \" \\u043B\\u0435\\u0442\"));\n  });\n  changeSurnameBtn.addEventListener('click', function () {\n    // const olSurname = JSON.parse(localStorage.getItem('values')).surname\n    var surname = prompt('Введите новую фамилию');\n    fdata['surname'] = surname;\n    student.ChangeSurname(surname);\n    localStorage.setItem('values', JSON.stringify(fdata));\n    alert(\"\\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u0443 \\u0432\\u0430\\u0441 \\u0442\\u0430\\u043A\\u0430\\u044F \\u0444\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F: \".concat(surname));\n  });\n  getInfoBtn.addEventListener('click', function () {\n    alert(localStorage.getItem('values'));\n  });\n});\n\nfunction sortWordsInTextByAlphabet(text) {\n  var words = text.split(' ');\n  var cleanWords = words.map(function (word) {\n    var newWord = word.toLowerCase();\n    return newWord.replace(/[\\u2000-\\u206F\\u2E00-\\u2E7F\\\\'!\"#$%&()*+,\\-.\\/:;<=>?@\\[\\]^_`{|}~]/, '');\n  });\n  return cleanWords.sort();\n}\n\nvar text = 'Meet my family. There are five of us – my parents, my elder brother, my baby sister and me. First, meet my mum and dad, Jane and Michael. My mum enjoys reading and my dad enjoys playing chess with my brother Ken. My mum is slim and rather tall. She has long red hair and big brown eyes. She has a very pleasant smile and a soft voice. My mother is very kind and understanding. We are real friends. She is a housewife. As she has three children, she is always busy around the house. She takes care of my baby sister Meg, who is only three months old.';\nconsole.log(text);\nvar sortedWords = sortWordsInTextByAlphabet(text);\nconsole.log(sortedWords);\n\n//# sourceURL=webpack://web-lab/./exercise.js?");
/******/ })()
;