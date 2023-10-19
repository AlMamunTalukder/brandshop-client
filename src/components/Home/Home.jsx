import BestCar from "../BestCar/BestCar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import VarityofCars from "../Varity-of-Cars/VarityofCars";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <VarityofCars></VarityofCars>
      <BestCar></BestCar>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
