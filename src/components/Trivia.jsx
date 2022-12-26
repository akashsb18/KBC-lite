import React, { useEffect, useState } from 'react'

export default function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {

    const [question, setQuestion] = useState(null);
    const [setlectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);    //Since questionNumber starts from 1 and array starts from 0, so we need to do -1
    }, [data, questionNumber]);                 // Dependencies

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active")   //After tapping, it will keep on showing that position
        setTimeout(() => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        }, 500)
    }

    return (
        <div className='trivia'>
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={setlectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
                ))}

            </div>
        </div>
    )
}
