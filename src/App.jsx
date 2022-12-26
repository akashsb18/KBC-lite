import React, { useState } from 'react';
import "./App.css"
import "./components/Trivia"
import Trivia from './components/Trivia';

function App() {
  const [questionNumber, setQuestionNumber] = useState(2);
  const [stop, setStop] = useState(false);

  const data = [
    {
      id: 1,
      question: "Who has the most century in ODIs",
      answers: [
        {
          text: "Virat Kohli",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: true,
        },
        {
          text: "Ricky Ponting",
          correct: false,
        },
        {
          text: "AB de Villiers",
          correct: false,
        }
      ]
    },
    {
      id: 2,
      question: "Which has been the most successful team in the Women’s Hockey World Cup?",
      answers: [
        {
          text: "Netherlands",
          correct: true,
        },
        {
          text: "Pakistan",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Australia",
          correct: false,
        }
      ]
    },
    {
      id: 3,
      question: "Which country hosted the 2018 Asian Games?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Indonesia",
          correct: true,
        },
        {
          text: "Japan",
          correct: false,
        }
      ]
    }

  ]

  const moneyPyramid = [
    { id: 1, amount: "₹ 1,000" },
    { id: 2, amount: "₹ 2,000" },
    { id: 3, amount: "₹ 3,000" },
    { id: 4, amount: "₹ 5,000" },
    { id: 5, amount: "₹ 10,000" },
    { id: 6, amount: "₹ 20,000" },
    { id: 7, amount: "₹ 40,000" },
    { id: 8, amount: "₹ 80,000" },
    { id: 9, amount: "₹ 1,60,000" },
    { id: 10, amount: "₹ 3,20,000" },
    { id: 11, amount: "₹ 6,40,000" },
    { id: 12, amount: "₹ 12,50,000" },
    { id: 13, amount: "₹ 25,00,000" },
    { id: 14, amount: "₹ 50,00,000" },
    { id: 15, amount: "₹ 1 Crore" },
    { id: 16, amount: "₹ 7 Crore" },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
        </div>
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPyramid.map(m => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className='moneyListItemNumber'>{m.id}</span>
              <span className='moneyListItemAmount'>{m.amount}</span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
