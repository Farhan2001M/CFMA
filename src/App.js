import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Datavisuals from "./pages/datavisuals";
import Appointmentschdeular from "./pages/appointmentschdeular";
import Dosagetracker from "./pages/dosagetracker";
import Symptomtracker from "./pages/symptomtracker";
import Home from "./pages/home";
import Mainlayout from "./layouts/Mainlayout";
import { ToastContainer, toast } from "react-toastify";
import About from "./pages/about";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [active, setActive] = useState(-1);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    navigate("/");
  }, []);


  return (
    <Mainlayout active={active} setActive={setActive}>
      <Routes>
        <Route
          path="/"
          element={<Home active={active} setActive={setActive} />}
        />
          <Route
          path="/about"
          element={<About active={active} setActive={setActive} />}
        />
        <Route
          path="/datavisuals"
          element={<Datavisuals active={active} setActive={setActive} />}
        />
        <Route
          path="/appointmentschdeular"
          element={
            <Appointmentschdeular active={active} setActive={setActive}  data={data} setData = {setData}/>
          }
        />
        <Route
          path="/dosagetracker"
          element={<Dosagetracker active={active} setActive={setActive} />}
        />
        <Route
          path="/symptomtracker"
          element={<Symptomtracker active={active} setActive={setActive} />}
        />
      </Routes>
    </Mainlayout>
  );
}

export default App;
