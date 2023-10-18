import "./App.css";
import BestCar from "./components/BestCar/BestCar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import VarityofCars from "./components/Varity-of-Cars/VarityofCars";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="space-y-5">
      <Header></Header>
      <VarityofCars></VarityofCars>
      <BestCar></BestCar>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
