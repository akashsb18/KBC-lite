

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What Netflix show had the most streaming views in 2021?",
      answers: [
        {
          text: "Army of Thieves",
          correct: false,
        },
        {
          text: "The Guilty",
          correct: false,
        },
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Squid Game",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which player is given the title of the Flying Sikh?",
      answers: [
        {
          text: "Milkha Singh",
          correct: true,
        },
        {
          text: "Bahadur Singh Chauhan",
          correct: false,
        },
        {
          text: "Kamaljeet Sandhu",
          correct: false,
        },
        {
          text: "Harmandeep Singh",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "“Bandy” is a sub-type of which sport?",
      answers: [
        {
          text: "Kabaddi",
          correct: false,
        },
        {
          text: "Hand ball",
          correct: false,
        },
        {
          text: "Hockey",
          correct: true,
        },
        {
          text: "Squash",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which sport's competition is awarded the “Stanley Cup”?",
      answers: [
        {
          text: "Tennis",
          correct: false,
        },
        {
          text: "Baseball",
          correct: false,
        },
        {
          text: "Hockey",
          correct: true,
        },
        {
          text: "Football",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which sport's competition was known as the “AFC Challenge Cup”?",
      answers: [
        {
          text: "Cricket",
          correct: false,
        },
        {
          text: "Volleyball",
          correct: false,
        },
        {
          text: "Football",
          correct: true,
        },
        {
          text: "Hockey",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which sport's competition is awarded the “Stanley Cup”?",
      answers: [
        {
          text: "Tennis",
          correct: false,
        },
        {
          text: "Baseball",
          correct: false,
        },
        {
          text: "Hockey",
          correct: true,
        },
        {
          text: "Football",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which cricket world cup is known as the “Wills World Cup”?",
      answers: [
        {
          text: "1992 Cricket World Cup",
          correct: false,
        },
        {
          text: "1996 Cricket World Cup",
          correct: true,
        },
        {
          text: "1999 Cricket World Cup",
          correct: false,
        },
        {
          text: "2003 Cricket World Cup",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which FIFA Football World Cup was the venue of the event “Maracanazo”?",
      answers: [
        {
          text: "1950 FIFA World Cup",
          correct: true,
        },
        {
          text: "1954 FIFA World Cup",
          correct: false,
        },
        {
          text: "1958 FIFA World Cup",
          correct: false,
        },
        {
          text: "1962 FIFA World Cup",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which sport's competition is known as the “Uber Cup”?",
      answers: [
        {
          text: "Racing",
          correct: false,
        },
        {
          text: "Golf",
          correct: false,
        },
        {
          text: "Badminton",
          correct: true,
        },
        {
          text: "Cricket",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who became the “most-valued player” of the 2019 FIBA Basketball World Cup?",
      answers: [
        {
          text: "Ricky Rubio",
          correct: true,
        },
        {
          text: "Luis Scola",
          correct: false,
        },
        {
          text: "Marc Gasol",
          correct: false,
        },
        {
          text: "Evan Fournier",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who was “Suzanne Lenglen”?",
      answers: [
        {
          text: "An American tennis player",
          correct: false,
        },
        {
          text: "A French tennis player",
          correct: true,
        },
        {
          text: "An Australian tennis player",
          correct: false,
        },
        {
          text: "A Canadian tennis player",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which Indian state recorded the highest Tiger deaths in 2021?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Madhya Pradesh",
          correct: true,
        },
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Gujarat",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
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
        { id: 13, amount: "₹ 25,50,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1 Crore" },

      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;