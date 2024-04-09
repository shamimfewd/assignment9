import { Helmet } from "react-helmet-async";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>EasyDeals | Home</title>
      </Helmet>
      <Header />
      <h1>this is home</h1>
    </div>
  );
};

export default Home;
