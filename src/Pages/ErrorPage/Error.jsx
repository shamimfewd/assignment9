import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center text-center pt-60">
      <Helmet>
        <title>EasyDeals - 404</title>
      </Helmet>
      <div>
        <h2 className="text-7xl font-extrabold">404</h2>
        <h2 className="text-3xl font-bold text-red-500">Page Not Found!!</h2>

        <Link to={"/"}>
          <button className="btn">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
