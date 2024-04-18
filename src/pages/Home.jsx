import Estate from "../components/Estate";
import Slides from "../components/Slides";
import "../css/Slide.css";

const Home = () => {
  return (
    <div>
      <div className="px-8 mt-8 rounded-lg ">
        <Slides></Slides>
        <Estate></Estate>
      </div>
      
    </div>
  );
};

export default Home;
