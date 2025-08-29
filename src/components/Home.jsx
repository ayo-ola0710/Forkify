import ItemsContainer from "./ItemsContainer";
import { MealProvider } from "../context/MealContext";

const Home = () => {
  return (
    <div className="bg-orange-200 pb-110">
      <MealProvider>
        <ItemsContainer />
      </MealProvider>
    </div>
  );
};

export default Home;
