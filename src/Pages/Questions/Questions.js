import React, { useState, useEffect } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Question from "../../questions.json";

export const Questions = (props) => {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);

  const url = "https://icbsbackend.onrender.com/api/questions";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const params = useParams();
  let path = params?.questionsId;

  const classId = path.charAt(path.length - 1);

  useEffect(() => {
    const filteredQuestion = data?.filter((item) => {
      return item.class.toString() === classId;
    });
    if (filteredQuestion.length >= 1) {
      setQuestions(filteredQuestion);
    }
  }, [data]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [gratings, setGratings] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    if (score < questions.length / 2) {
      setGratings(false);
    } else {
      setGratings(true);
    }
  };
  console.log(questions);

  return (
    <div className="questions">
      <div className="classes">
        <section className="classes-box container">
          <div className="classes-heading">
            <h2>
              Practice <span className="b-class-secondary">Class {classId}</span>
            </h2>
          </div>

          <div>
            {showScore ? (
              <div className="score-section">
                <h2>
                  You scored {score} out of {questions.length}.
                </h2>

                {!gratings ? (
                  <p style={{ color: "red" }}>Poor score Try Next Time</p>
                ) : (
                  <p style={{ color: "green" }}>Great Job ! You Score well</p>
                )}

                <Link to="/classes">
                  {" "}
                  <button className="home_btn">
                    {" "}
                    Click Here For other classes
                  </button>
                </Link>
              </div>
            ) : (
              <div className=" questions-container">
                <div className="question-section">
                {questions.length >= 1 ? (
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                ) : (
                  <h2>Loading ...</h2>
                )}
                  <div className="question-text">
                    {questions.length >= 1 &&
                      questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions.length >= 1 &&
                    questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <button
                          className="answer-btn"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
