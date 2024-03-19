import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Component/Layout/Layout";
import Classes from "./Pages/Classes/Classes";
import ProtectedRoute from "./Component/ProtecteRoute/ProtectedRoute.";
import { Questions } from "./Pages/Questions/Questions";
import { Answers } from "./Pages/Answers/Answers.js";
// import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              {" "}
            </Route>

            <Route
              path="/classes"
              element={
                <ProtectedRoute>
                  {" "}
                  <Classes />
                </ProtectedRoute>
              }
            />

            <Route
              path="/questions/:questionsId"
              element={
                <ProtectedRoute>
                  <Questions
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path="/answers/:answersId"
              element={
                <ProtectedRoute>
                  <Answers />
                </ProtectedRoute>
              }
            />

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
