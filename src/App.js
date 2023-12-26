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
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [active, setActive] = useState(-1);
  // const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  // setting active tab

  useEffect(() => {
    navigate("/");
  }, []); // Empty // Include alarm in the dependency array

  // fetching data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Make a GET request to the /getData endpoint
  //       const response = await axios.get("http://localhost:4000/getData");
  //       setData(response.data);
  //       console.log("response", response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Mainlayout active={active} setActive={setActive}>
      <Routes>
        <Route
          path="/"
          element={<Home active={active} setActive={setActive} />}
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
