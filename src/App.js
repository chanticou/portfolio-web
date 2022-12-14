import React from "react";
import { Landing } from "./components/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import { ContentHome } from "./components/ContentHome/ContentHome";
import { Form } from "./components/Form/Form";
import { Yo } from "./components/Yo/Yo";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <ContentHome />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route
          path="/contact-form"
          element={
            <>
              <Form />
            </>
          }
        />
        <Route
          path="/yo"
          element={
            <>
              <Yo />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
