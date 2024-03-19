import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Questions from "../../questions.json";

export const Answers = () => {
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
  let path = params?.answersId;

  const classId = path.charAt(path.length - 1);

  console.log(classId);

  useEffect(() => {
    const filteredQuestion = data?.filter((item) => {
      return item.class.toString() === classId;
    });
    if (filteredQuestion.length >= 1) {
      setQuestions(filteredQuestion);
    }
  }, [data]);

  console.log(questions);

  return (
    <div className="questions">
      <div className="classes">
        <section className="classes-box container">
          <div className="classes-heading">
            <h2>
              Answers Sheet{" "}
              <span className="b-class-secondary">Class {classId}</span>
            </h2>
          </div>

          <div>
            {questions &&
              questions?.map((item, index) => (
                <div
                  className=" questions-container"
                  style={{ marginBottom: "100px" }}
                >
                  <div className="question-section">
                    <div className="question-text">{item.questionText}</div>
                  </div>

                  <div className="answer-section">
                    {item &&
                      item?.answerOptions?.map((i, index2) => (
                        <button
                          style={{
                            background: `${i.isCorrect ? "green" : "red"}`,
                          }}
                          className="answer-btn"
                        >
                          {i.answerText}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};
