import { Helmet } from "react-helmet-async";
import Header from "../Components/Header/Header";
import Estates from "../Components/Estates/Estates";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>EasyDeals - Home</title>
      </Helmet>
      <Header />
      <Estates />
    </div>
  );
};

export default Home;
