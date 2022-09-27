import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}


export default App;
