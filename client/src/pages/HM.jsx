import React from 'react'
import Quiz from 'react-quiz-component'


export const HM = () => {
  const quiz = {
    quizTitle: 'Тест по React',
    quizSynopsis:
      'Здесь вы можете пройти тест с уровнем «Начальный» на тему React JS. На тест выделяется небольшой промежуток времени, а также после окончания теста вы сможете просмотреть результаты и ознакомиться с верными и неверными ответами.',
    nrOfQuestions: '5',
    questions: [
      {
        question:
          'Как вы можете получить доступ к состоянию компонента изнутри функции-члена?',
        questionType: 'text',
        questionPic: 'https://cholangiocarcinoma.org/wp-content/uploads/2021/12/noun-science-1049886-FFFFFF.png', // if you need to display Picture in Question
        answerSelectionType: 'single',
        answers: [
          'this.getState()',
          'this.prototype.stateValue',
          'this.state',
          'this.values'
        ],
        correctAnswer: '3',
        messageForCorrectAnswer: 'Correct answer. Good job.',
        messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
        explanation:
          'Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента.',
        point: '20'
      },
      {
        question: 'ReactJS разработан _____?',
        questionType: 'text',
        answerSelectionType: 'single',
        answers: ['Google Engineers', 'Facebook Engineers'],
        correctAnswer: '2',
        messageForCorrectAnswer: 'Correct answer. Good job.',
        messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
        explanation:
          'React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.',
        point: '20'
      },
      {
        question: 'ReactJS - это фреймворк на основе MVC?',
        questionType: 'text',
        answerSelectionType: 'single',
        answers: ['Правда', 'Ложь'],
        correctAnswer: '1',
        messageForCorrectAnswer: 'Correct answer. Good job.',
        messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
        explanation:
          'React - это полноценный MVC-фреймворк React предназначен для работы с "view" частью React является «контроллером» с точки зрения MVC.',
        point: '10'
      },
      {
        question: 'Какая из следующих концепций является ключевой для ReactJS?',
        questionType: 'text',
        answerSelectionType: 'single',
        answers: [
          'Компонентно-ориентированный дизайн',
          'Модель делегирования событий',
          'И то, и другое из вышеперечисленного'
        ],
        correctAnswer: '3',
        messageForCorrectAnswer: 'Correct answer. Good job.',
        messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
        explanation:
          'Основополагающая концепция React.js – многоразовые компоненты. Разработчик создает небольшие части кода, которые можно объединять, чтобы сформировать более крупные или использовать их как самостоятельные элементы интерфейса.',
        point: '30'
      },
      {
        question: 'Выберите логотип React',
        questionType: 'photo',
        answerSelectionType: 'single',
        answers: [
          'https://sun9-61.userapi.com/impg/M-Oi0SBhXpNinVZByR4FmgzbFIKhKILKnllbGg/wFTS0b3ex7k.jpg?size=2560x1914&quality=95&sign=6fa7a47cb494951ad7187a8c284e5604&type=album',
          'https://static.tildacdn.com/tild3232-3339-4438-a436-343966363736/react4x.png',
          'https://i.ytimg.com/vi/eBcvowm-Kzo/maxresdefault.jpg',
          'https://banner2.cleanpng.com/20180430/xiw/kisspng-vue-js-javascript-angularjs-front-and-back-ends-ty-5ae6b3d5944b41.1027055215250687576074.jpg'
        ],
        correctAnswer: '1',
        messageForCorrectAnswer: 'Correct answer. Good job.',
        messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
        explanation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        point: '20'
      },
      {
        question: 'What are the advantages of React JS?',
        questionType: 'text',
        answerSelectionType: 'multiple',
        answers: [
          'React can be used on client and as well as server side too',
          'Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps',
          'React components have lifecycle events that fall into State/Property Updates',
          'React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer'
        ],
        correctAnswer: [1, 2, 4],
        messageForCorrectAnswer: 'Correct answer. Good job.',
        messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
        explanation:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        point: '20'
      }
    ]
  }
  return (
    <><Quiz quiz={quiz} /></>
  )
}
