import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarList from "./Components/CarList";
import AddCar from "./Components/AddCar";
import UpdateCar from "./Components/UpdateCar";
import CarShow from "./Components/ShowCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/show/:id" element={<CarShow />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/update/:id" element={<UpdateCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;